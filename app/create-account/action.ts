"use server";
import {z} from "zod";

const passwordRegex = new RegExp(
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).+$/
    /^(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username:string) => {
    return !username.includes("potato");
}

const checkPasswords = ({password, confirmPassword}:{password:string, confirmPassword:string}) => {
    return password === confirmPassword;
}

const formSchema = z
.object({
    username: z.string({
        invalid_type_error: "Username must be a string",
        required_error: "Username required",
    })
    .min(4).max(10).trim()
    .refine(checkUsername, "No potatoes allowed"),
    email: z.string().email().toLowerCase().trim(),
    password: z.string().min(4).regex(passwordRegex, 
    "A password must have special characters"),
    confirmPassword: z.string().min(4),
})
.refine(checkPasswords, {
    message: "Both passwords should be the same",
    path: ["confirmPassword"],
});

export async function createAccount(prevState:any, formData:FormData) {
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };
    const result = formSchema.safeParse(data);
    if(!result.success) {
        console.log(data);
        console.log(result.error.flatten());
        return result.error.flatten();
    } else {
        console.log(result.data);
    }
}