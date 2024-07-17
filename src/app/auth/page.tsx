"use client";

import { Button, Input, Space } from "antd";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState({
        login: "",
        password: "",
    });

    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setFormValues({ login: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                login: formValues.login,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            console.log(res);
            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("invalid email/login or password");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };


    return (
        <form onSubmit={onSubmit}>
            <Space direction="vertical">
                {error && (
                    <p>{error}</p>
                )}
                <Input
                    required
                    name="login"
                    value={formValues.login}
                    onChange={handleChange}
                    placeholder="Email address or login"
                />

                <Input
                    required
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <Button
                    htmlType="submit"
                    disabled={loading}
                >
                    {loading ? "loading..." : "Sign In"}
                </Button>
                <p>OR</p>
                <a
                    onClick={() => alert("Not implemented yet")}
                    role="button"
                >
                    <img
                        className="pr-2"
                        src="/images/google.svg"
                        alt=""
                        style={{ height: "2rem" }}
                    />
                    Continue with Google
                </a>
                <a
                    onClick={() => alert("Not implemented yet")}
                    role="button"
                >
                    <img
                        src="/images/github.svg"
                        alt=""
                        style={{ height: "2.2rem" }}
                    />
                    Continue with GitHub
                </a>
            </Space>
        </form>
    );
};

export default LoginForm