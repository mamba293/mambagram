'use server';

import * as z from "zod";
import bcrypt from "bcrypt";
import axios from "axios";

import { registerScema } from "@/schemas";

const createUser = async (name: string, email: string, hashedPassword: string) => {
  try{
    const newUser = {
      UserName: name,
      Email: email,
      PasswordHash: hashedPassword
    };

    const createUserResponse = await axios.post('http://localhost:5198/users', newUser);

    if(createUserResponse.status === 201) {
      return {success: true};
    }else {
      return{error: "Failed to create user"};
    }
  }catch(error){
      return {error: "Failed to create user"};
  }
} 

export const register = async (values : z.infer<typeof registerScema>) => {
    const validatedFields = registerScema.safeParse(values);

    if(!validatedFields.success){
      return {error: "Invalid fields"};
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const response = await axios.get(`http://localhost:5198/users/by-email/${email}`);
      if (response.data) {
          console.log(response.data);
          return { error: "Email already in use!" };
      }
    } 
    catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return await createUser(name, email, hashedPassword);
      } else {
          return { error: "Something went wrong!" };
      }
    }
}