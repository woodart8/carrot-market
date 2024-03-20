"use server";

export const handleForm = async (prevState: any, data: FormData) => {
    console.log(prevState);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
        errors:["wrong password","password is too short"]
    }
}