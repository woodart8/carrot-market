"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
    const [state, trigger] = useFormState(createAccount, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form action={trigger} className="flex flex-col gap-4">
                <Input
                    name="username" type="text" placeholder="Username" required 
                    minLength={4} maxLength={10} errors={state?.fieldErrors.username}
                />
                <Input
                    name="email" type="email" placeholder="Email" required errors={state?.fieldErrors.email}
                />
                <Input
                    name="password" type="password" placeholder="Password" required 
                    minLength={4} errors={state?.fieldErrors.password}
                />
                <Input
                    name="confirmPassword" type="password" placeholder="Confirm password" required
                    minLength={4} errors={state?.fieldErrors.confirmPassword}
                />
                <Button
                    text="Create account"
                />
            </form>
            <SocialLogin/>
        </div>
    );
}