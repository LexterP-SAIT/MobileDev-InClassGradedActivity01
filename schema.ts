import { z } from 'zod';



export const employeeSchema = z.object({
    firstName: z.string() .min(1, 'First name is required') . min(2, 'First name must be at least 2 characters.') .max(30, 'First name must be within 30 characters'),
    lastName: z.string() .min(1, 'Last name is required') .min(2, 'Last name must be at least 2 characters.') .max(30, 'Last name must be within 30 characters'),
    email: z.email('Please enter a valid email address') .min(1, 'Email is required') ,
    password: z.string() .min(1, 'Password is required') .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], })
export type EmployeeData = z.infer<typeof employeeSchema>;


export const signInSchema = z.object({
        email:z.string() .nonempty('Email address is required') .email('Please enter a valid email address'),
        password: z .string() .nonempty('Password is required'),
    });
export type signIn = z.infer<typeof signInSchema>


export const signUpschema = z.object({
    firstName: z.string() .min(1, 'First name is required') . min(2, 'First name must be at least 2 characters.') .max(30, 'First name must be within 30 characters'),
    lastName: z.string() .min(1, 'Last name is required') .min(2, 'Last name must be at least 2 characters.') .max(30, 'Last name must be within 30 characters'),
    email: z.email('Please enter a valid email address') .min(1, 'Email is required') ,
    password: z.string() .min(1, 'Password is required') .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], })

export type signUp = z.infer<typeof signUpschema>;