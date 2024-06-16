'use client';
import { LoginPage } from "@/pages/LoginPage";

export default function Login() {
    return (
        //TODO fix problem with error:
        //Type '{ error: string; }' is not assignable to type 'IntrinsicAttributes'.
        //Property 'error' does not exist on type 'IntrinsicAttributes'.
        <LoginPage error={''} />
    )
}