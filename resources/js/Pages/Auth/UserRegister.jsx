import ButtonGroup from "@/Components/UI/ButtonGroup";
import Checkbox from "@/Components/UI/CheckBox";
import CustomHead from "@/Components/UI/CustomHead";
import Input from "@/Components/UI/Input";
import RadioGroup from "@/Components/UI/RadioGroup";
import SecondaryHead from "@/Components/UI/SecondaryHead";
import { UserGuestLayout } from "@/Layouts/UserGuestLayout";
import { ChevronDown, ChevronRight, CircleQuestionMark } from "lucide-react";
import { useState } from "react";
import Info1 from "./RegisterComponents/Info1";
import Button from "@/Components/UI/Button";
import axios from "axios";

export default function UserRegister() {
    const [currentStep, setCurrentStep] = useState(1)

    function stepsData(currentStep, setCurrentStep) {
        switch(currentStep) {
            case 1: 
                return <Info1 setCurrentStep={setCurrentStep}/>;    
        }
    }
    return (
        <>
            <UserGuestLayout>
                <div className="bg-bg-secondary">
                    <CustomHead 
                        heading="Create an ImmiAccount"
                    />
                    <div className="p-4">
                        {stepsData(currentStep, setCurrentStep)}
                    </div>
                </div>
            </UserGuestLayout>
        </>
    )
}