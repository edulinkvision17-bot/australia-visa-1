import CustomHead from "@/Components/UI/CustomHead";
import Table from "@/Components/UI/Table";
import TopNav from "@/Components/UI/TopNav";
import { UserAuthenticatedLayout } from "@/Layouts/UserAuthenticatedLayout";
import { CircleQuestionMark, Info, Minus, Plus } from "lucide-react";
import { useState } from "react";
import DetailHead from "./DetailHead";
import ApplicationHome from "./ApplicationHome";
import ViewAttachments from "./ViewAttachments";
import Messages from "./Messages";
import UpdateDetail from "./UpdateDetail";
import BiometricsCollection from "./BiometricsCollection";

export default function Detail() {
    const [showSection, setShowSection] = useState("application_home")

    const getDetailSection = (showSection) => {
        switch (showSection) {
            case "application_home":
                return <ApplicationHome />
                break;
            case "messages":
                return <Messages />
                break;
            case "update_details":
                return <UpdateDetail />
                break;
            case "view_attachments":
                return <ViewAttachments />
                break;
            case "biometrics_collection":
                return <BiometricsCollection />
                break;
            default:
                break;
        }
    }
    return (
        <>
            <UserAuthenticatedLayout title="Online Lodgement">
                <TopNav />
                <div className="py-2">
                    <CustomHead heading={"Application for a Visitor Short Stay Visa Reference Number: EGP9VAL4YA"}/>
                    <div className="bg-bg-secondary">
                        <div className="flex p-3 gap-2">
                            <div className="border border-[#f2f2f2] w-[25%] self-start">
                                <div className="bg-[#f2f2f2] py-1 px-3 text-[15px] font-[500]">
                                    <p className="text-[#196cc5]">Menu</p>
                                </div>
                                <div className="px-3 py-4 text-[15px] font-[1000]">
                                    <p className="cursor-pointer" onClick={() => setShowSection("application_home")}>Application home</p>
                                    <p className="cursor-pointer" onClick={() => setShowSection("messages")}>Messages</p>
                                    <p className="cursor-pointer" onClick={() => setShowSection("update_details")}>Update details</p>
                                </div>
                                <div className="bg-[#f2f2f2] py-1 px-3 text-[15px] font-[500]">
                                    <p className="text-[#196cc5]">Actions</p>
                                </div>
                                <div className="px-3 py-4 text-[15px] font-[1000]">
                                    <p className="cursor-pointer" onClick={() => setShowSection("view_attachments")}>View attachments</p>
                                    <p className="cursor-pointer" onClick={() => setShowSection("biometrics_collection")}>Biometrics collection</p>
                                </div>
                            </div>
                            <div className="border w-[75%] border-gray-300 pt-1 pb-4 px-2">
                                {getDetailSection(showSection)}
                            </div>
                        </div>
                    </div>
                </div>
            </UserAuthenticatedLayout>
        </>
    )
}