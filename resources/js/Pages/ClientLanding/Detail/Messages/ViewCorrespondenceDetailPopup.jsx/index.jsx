import Button from "@/Components/UI/Button";
import CustomHead from "@/Components/UI/CustomHead";
import Popup from "@/Components/UI/Popup";
import { Plus } from "lucide-react";
import AttachmentSection from "./AttachmentSection";

export default function ViewCorrespondenceDetailPopup({isOpenCorrespondencePopup, setIsOpenCorrespondencePopup, title, date, fileName, attachmentName}) {
    return (
        <Popup
            isOpen={isOpenCorrespondencePopup}
            onClose={() => setIsOpenCorrespondencePopup(false)}
            title={<p>View Correspondence item</p>}
            headerActions={[<Button label={<Plus size={13} strokeWidth={4} />} className={"inline-flex px-[4px] py-[2px] bg-[#ffffff] border-1 border-[#d1d0d0] rounded-sm"}/>]}
            width="3xl"
            footer={<div className="w-full flex justify-start">
                <Button 
                    className={"border-[#878686] text-[13px] font-medium h-6 rounded-sm"}
                    label={"Back"}
                    onClick={() => setIsOpenCorrespondencePopup(false)}
                />
            </div>}
        >
            <div>
                <div className="flex justify-between mb-1">
                    <p className="w-[170px] text-[15px] font-medium">Correspondence title:</p>
                    <p className="w-[370px] text-[15px] font-medium">{title}</p>
                </div>
                <div className="flex justify-between">
                    <p className="w-[170px] text-[15px] font-medium">Date Sent:</p>
                    <p className="w-[370px] text-[15px] font-medium">{date}</p>
                </div>
                <div className="mt-2">
                    <CustomHead heading={"Correspondence details"}/>
                        <div className="bg-bg-secondary pt-3 pl-3 pr-3 pb-2">
                            <div>
                                <span className="cursor-pointer underline text-[14px] text-[#833cae] font-medium">{fileName}</span><span className="text-[14px] font-medium">.pdf</span>
                            </div>
                            <div>
                                <AttachmentSection label={"Attachments"}>
                                    <div>
                                        <span className="cursor-pointer underline text-[14px] text-[#1e1e5b] font-medium">{attachmentName}</span><span className="text-[14px] font-medium">.html</span>
                                    </div>
                                </AttachmentSection> 
                            </div>
                        </div>
                </div>
            </div>
        </Popup>
    )
}