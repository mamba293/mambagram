import * as z from "zod";

export const loginSchema = z.object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(10,{
        message: "Password is not valid",
    }),
});

export const registerScema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(10,{
        message: "Password is required",
    }),
    name: z.string().min(1,{
        message: "Name is required",
    })
})