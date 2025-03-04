'use server';

import * as z from "zod";
import { loginSchema } from "@/schemas";
import bcrypt from "bcrypt";
import axios from "axios";

export const login = async (values : z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if(!validatedFields.success){
    return {error: "Invalid fields"};
  }

  const {email, password} = validatedFields.data;

  try{
    const response = await axios.get(`http://localhost:5198/users/by-email/${email}`);
    if (!response.data) {
      return { error: "Account with this email is upsent!" };
    } 
    const isPasswordValid = await bcrypt.compare(password, response.data.passwordHash);
    
    if(!isPasswordValid){

      return {error: "Incorrect password"}
    }
    else{
      console.log("zaebyce");
    }
   
  }
  catch(error){
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return { error: "Account with this email is not found!" };
    } else{
      return { error: "Something went wrong" };
    }
  }

  return {success: true}
}