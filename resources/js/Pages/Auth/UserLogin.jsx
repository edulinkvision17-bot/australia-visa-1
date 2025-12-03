import Button from "@/Components/UI/Button";
import ButtonGroup from "@/Components/UI/ButtonGroup";
import CustomHead from "@/Components/UI/CustomHead";
import Input from "@/Components/UI/Input";
import SecondaryHead from "@/Components/UI/SecondaryHead";
import { UserGuestLayout } from "@/Layouts/UserGuestLayout";
import { router } from "@inertiajs/react";
import { CircleQuestionMark, Info } from "lucide-react";
import React from "react";
import { useState } from "react";

function CreateImmiAccount() {
    return (
        <div className="flex flex-col">
            <h1 className="text-text-primary text-[24px] font-semibold mb-1">Create an ImmiAccount</h1>
            <p className="mb-2">
                Create an ImmiAccount to access the Department of Home Affairs's online services.
            </p>
            <div className="flex items-center gap-2">
                <Button 
                    label="Create ImmiAccount"
                    onClick={() => router.visit('/register')}
                />
                <CircleQuestionMark size={16} className="text-text-primary"/>
            </div>
        </div>
    )
}

function ForgotPassword() {
    return (
        <div className="flex flex-col items-end gap-2 mt-2 border-b border-dotted border-gray-500 pb-4">
            <p>I have forgotten my ImmiAccount <span className="underline decoration-text-primary text-text-primary cursor-pointer">username</span> or <span className="underline decoration-text-primary text-text-primary cursor-pointer">password</span></p>
            <p>I no longer have access to my <span className="underline decoration-text-primary text-text-primary cursor-pointer">multi-factor authentication app</span></p>
        </div>
    )
}

export default function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleChange(name, value) {
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    function handleLogin() {
        router.post(route("user.login"), {
            email: loginData.username,
            password: loginData.password
        })
    }

    
  return (
    <UserGuestLayout>
        <div className="bg-bg-secondary">
            <CustomHead heading={"Login"}/>
            <div className="p-4">
                {/* <Information /> */}
                <div>
                    <SecondaryHead 
                        heading="Login to ImmiAccount"
                    />
                    <p>
                        Fields marked <span className="text-text-error text-[16px]">*</span> must be completed.
                    </p>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-[200px]">
                            <div className="flex gap-2">
                                <p>
                                    Username
                                </p>
                                <span className="text-text-error">
                                    *
                                </span>
                            </div>
                            <div className="w-[500px] flex gap-2 items-center">
                                <Input
                                    type="text"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleChange}
                                />
                                <CircleQuestionMark size={16} className="text-text-primary"/>
                            </div>
                        </div>
                        <div className="flex gap-[204px]">
                            <div className="flex gap-2">
                                <p>
                                    Password
                                </p>
                                <span className="text-text-error">
                                    *
                                </span>
                            </div>
                            <div className="w-[500px] flex gap-2 items-center">
                                <Input
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                                <CircleQuestionMark size={16} className="text-text-primary"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonGroup 
                    leftBtnLabel="Cancel" 
                    rightBtnLabel="Login" 
                    leftOnClick={() => {}}
                    rightOnClick={handleLogin}
                />
                <ForgotPassword />
                <CreateImmiAccount />
            </div>
        </div>
    </UserGuestLayout>
  );
}
