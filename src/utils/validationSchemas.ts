import {z} from "zod"



export const createArticleSchema = z.object({
  title: z.string({
    required_error:"title is required",
    invalid_type_error:"title should be of type string"
  }).min(2,{message:"title must be more than two characters,thanks"}).max(200),

  description: z.string({
    required_error:"description is required",
    invalid_type_error:"title should be of type string"
  }).min(10).max(2000),
}) 


export const createUserSchema = z.object({
  username : z.string().min(4).max(100),
  email : z.string().min(2).max(50,{message:"email max 50"}).email({message:"invalid email"}),
  password : z.string().min(6).max(100),
  
})


export const loginUserSchema = z.object({
  email : z.string().min(2).max(50,{message:"email max 50"}).email({message:"invalid email"}),
  password : z.string().min(6).max(100),
  
})


export const CreateCommentSchema = z.object({
  text : z.string().min(2).max(500,{message:"text max 500"}),
  articleId : z.number(),
  
})


export const UpdateUserSchema = z.object({
  username : z.string().min(4).max(100).optional(),
  email : z.string().min(2).max(50,{message:"email max 50"}).email({message:"invalid email"}).optional(),
  password : z.string().min(6).max(100).optional(),
  
})
