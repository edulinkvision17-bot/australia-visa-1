import { ChevronDown, CircleQuestionMark } from "lucide-react";
import DetailHead from "../DetailHead";
import Table from "@/Components/UI/Table";
import { Pagination } from "../../ListOfApplications/Pagination";
import { useState } from "react";
import Popup from "@/Components/UI/Popup";
import ViewCorrespondenceDetailPopup from "./ViewCorrespondenceDetailPopup.jsx";

const popupData = {
    "IMMI Refusal Notification with Decision Record": {
        title:"IMMI Refusal Notification with Decision Record",
        date:"08 Nov 2025",
        fileName:"IMMI Refusal Notification with Decision Record - BCC2025/6392661 - 1845710125 - SINGH, HARVINDER",
        attachmentName:"Covering letter(EMAIL) - RECIPIENT/Harvinder Singh - (Main Applicant)"
    },
    "IMMI Acknowledgement of Application Recieved": {
        title:"IMMI Acknowledgement of Application Recieved",
        date:"29 Oct 2025",
        fileName:"IMMI Acknowledgement of Application Recieved - BCC2025/6392661 - 1845710125 - SINGH, HARVINDER",
        attachmentName:"Covering letter(EMAIL) - RECIPIENT/Harvinder Singh - (Main Applicant)"
    },
}

export default function Messages() {
    const [isOpenCorrespondencePopup, setIsOpenCorrespondencePopup] = useState(false) 

    const columns = [
        {
            key: "type",
            header: <div className="flex justify-between items-center">
                <p>Correspondence title</p>
                <ChevronDown className="cursor-pointer" size={15}/>
            </div>,
            render: (row) => (
                <span className="underline text-[#0a3874] cursor-pointer" onClick={() => setIsOpenCorrespondencePopup(popupData[row.type])}>{row.type}</span>
            ),
        },
        {
            key: "date",
            header: <div className="flex justify-between items-center">
                <p>Data sent</p>
                <ChevronDown className="cursor-pointer" size={15}/>
            </div>,
        },
        {
            key: "action",
            header: "Email",
            render: (row) => (
                <p>sahil15011994kumar@gmail.com</p>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            type: "IMMI Acknowledgement of Application Recieved",
            date: "29 Oct 2025",
            email: "sahil15011994kumar@gmail.com",
        },
        {
            id: 2,
            type: "IMMI Refusal Notification with Decision Record",
            date: "08 Nov 2025",
            actionLabel: "sahil15011994kumar@gmail.com",
        },
    ];

    console.log("IS Open Correspondence Popup", isOpenCorrespondencePopup);
    
    return (
        <div>
            <ViewCorrespondenceDetailPopup 
                isOpenCorrespondencePopup={!!isOpenCorrespondencePopup} 
                setIsOpenCorrespondencePopup={setIsOpenCorrespondencePopup} 
                title={isOpenCorrespondencePopup.title}
                date={isOpenCorrespondencePopup.date}
                fileName={isOpenCorrespondencePopup.fileName}
                attachmentName={isOpenCorrespondencePopup.attachmentName}
            />
            <div className="flex items-center gap-1">
                <DetailHead heading={"Messages"}/>
                <CircleQuestionMark size={16} className="text-[#196cc5]"/>
            </div>
            <p className="text-[15px]">Correspondence for this application is currently being sent to the Primary Applicant at the following email address: sahil15011994kumar@gmail.com</p>
            <p className="text-[15px]">Please check your spam filter if you have not recieved any correspondence.</p>
            <div className="mt-2">
                <p className="text-[#196cc5] text-[14px] font-semibold">List of correspondence</p>
                <div>
                    <Table columns={columns} data={data} />
                    <div className="w-full bg-[#f2f2f2] p-1 flex justify-end">
                        <Pagination hideInfo={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}