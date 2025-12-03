import ButtonGroup from "@/Components/UI/ButtonGroup"
import Input from "@/Components/UI/Input"
import SecondaryHead from "@/Components/UI/SecondaryHead"
import { router } from "@inertiajs/react"
import { CircleQuestionMark } from "lucide-react"
import { useState } from "react"

export default function Info1({setCurrentStep}) {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleCreate = async() => {
        try {
            const response = await axios.post(route("orgainization.save"), {...data})
            console.log("Response", response)
        } catch (error) {
            console.error("Error Creating Account", error)
        }
    }
    return (
        <>
            <SecondaryHead 
                heading="Email Address"
            />
            <div className="text-[16px] flex flex-col gap-2 mt-2 mb-4">
                <p>
                    Enter an email address to be used for account notifications - such as password resets.
                </p>
                <p>
                    A verification code will be sent to this email address.
                </p>
                <p>
                    You will need to enter the verification code on the next screen.
                </p>
            </div>
            <p>
                Fields marked <span className="text-text-error text-[16px]">*</span> must be completed.
            </p>
            <div className="flex gap-[200px] mt-2">
                <div className="w-[200px] flex gap-2">
                    <p>
                        Email Address
                    </p>
                    <span className="text-text-error">
                        *
                    </span>
                </div>
                <div className="w-[500px] flex gap-2 items-center">
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <CircleQuestionMark size={16} className="text-text-primary"/>
                </div>
            </div>
            <div className="flex gap-[200px] mt-2">
                <div className="w-[200px] flex gap-2">
                    <p>
                        Organisation Name
                    </p>
                    <span className="text-text-error">
                        *
                    </span>
                </div>
                <div className="w-[500px] flex gap-2 items-center">
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <CircleQuestionMark size={16} className="text-text-primary"/>
                </div>
            </div>
            <div className="flex gap-[200px] mt-2">
                <div className="w-[200px] flex gap-2">
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
                        value={data.password}
                        onChange={handleChange}
                    />
                    <CircleQuestionMark size={16} className="text-text-primary"/>
                </div>
            </div>
            <ButtonGroup 
                leftBtnLabel="Cancel" 
                rightBtnLabel="Create Account" 
                leftOnClick={() => {router.visit(route("login"))}}
                rightOnClick={() => handleCreate()}
            />
        </>
    )
}