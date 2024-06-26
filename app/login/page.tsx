"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
    const [state, trigger] = useFormState(handleForm, null);
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Log in with email and password.</h2>
            </div>
            <form action={trigger} className="flex flex-col gap-4">
                <Input
                    name="email" type="email" placeholder="Email" required
                />
                <Input
                    name="password" type="password" placeholder="Password" required
                />
                <Button text="Log in"/>
            </form>
            <SocialLogin/>
        </div>
    );
}