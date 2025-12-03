import { CircleCheck, CircleQuestionMark, Minus, Plus } from "lucide-react";
import DetailHead from "../DetailHead";
import CollapsibleRow from "./CollapsibleRow";
import Table from "@/Components/UI/Table";
import TravelDocument from "./TravelDocument";
import EvidenceOfCurrentEmployment from "./EvidenceOfCurrentEmployment";
import EvidenceOfFinancialStatus from "./EvidenceOfFinancialStatus";
import NationalIdentityDocument from "./NationalIdentityDocument";
import EvidenceOfPlannedTourism from "./EvidenceOfPlannedTourism";
import FamilyRegisterAndComposition from "./FamilyRegisterAndComposition";

export default function ViewAttachments() {
    return (
        <div>
            <div>
                <DetailHead heading={"View attachments"}/>
                <div className="text-[14px] text-[#000]">
                    <p className="leading-relaxed">Refer to the <span className="underline text-[#1d2e48]">checklist of documents</span> for more information about what to attach.</p>
                    <p className="leading-relaxed">There are specific <span className="underline text-[#1d2e48]">quality and formatting</span> requirements when scanning documents.</p>
                </div>
                <div className="flex items-center gap-3 mt-2 text-[14px] text-[#1d2e48]">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Plus size={14} className="bg-[#1d2e48] text-[#fff] rounded"/>
                        <p className="underline font-semibold">Expand all</p>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Minus size={14} className="bg-[#1d2e48] text-[#fff] rounded"/>
                        <p className="underline font-semibold">Collapse all</p>
                    </div>
                </div>
                <div>
                    {/* <div className="w-full flex gap-2 mt-1 bg-[#d8f0fc] h-[60px] border border-[#ccdce4] p-1">
                        <div className="flex items-center justify-center">
                            <p>+</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-[#196cc5]">
                                <p>SINGH. Harvinder</p>
                                <p>(20 Oct 2003)</p>
                            </div>
                            <p className="text-gray-900 text-[14px] font-medium"><span className="font-extrabold text-[15px]">11</span> attachments received of <span className="font-extrabold">60</span> maximum.</p>
                        </div>
                    </div> */}
                    <CollapsibleRow
                        collapsedColor={"bg-[#d8f0fc]"}
                        expandedColor={"bg-[#f2f2f2]"}
                        collapsedView={<>
                            <div className="flex items-center gap-1 text-[#196cc5]">
                                <p>SINGH. Harvinder</p>
                                <p>(20 Oct 2003)</p>
                            </div>
                            <p className="text-gray-900 text-[14px] font-medium"><span className="font-extrabold text-[15px]">11</span> attachments received of <span className="font-extrabold">60</span> maximum.</p>
                        </>}
                        expandedView={<>
                            <div>
                                <div>
                                    <p className="text-[14px] font-medium text-[#196cc5]">Required</p>
                                </div>
                                <div>
                                    <CollapsibleRow 
                                        collapsedView={<>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <p className="text-[13px] font-bold text-[#024d9e]">Evidence of the applicant's previous travel</p>
                                                    <CircleQuestionMark size={14} className="bg-[#024d9e] text-[#fff] rounded-full"/>
                                                </div>
                                                <p className="text-gray-900 text-[14px] font-medium"><span className="font-extrabold text-[15px]">0</span> Recieved</p>
                                            </div>
                                        </>}
                                        collapsedColor={"bg-[#d8f0fc]"}
                                        expandedColor={"bg-[#f2f2f2]"}
                                    />
                                </div>
                            </div>
                            <div className="mt-16">
                                <div>
                                    <p className="text-[14px] font-medium text-[#196cc5]">Additional documents</p>
                                </div>
                                <div>
                                    <CollapsibleRow 
                                        collapsedView={<>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-1">
                                                    <p className="text-[13px] font-bold text-[#024d9e]">Other documents</p>
                                                    <CircleQuestionMark size={14} className="bg-[#024d9e] text-[#fff] rounded-full"/>
                                                </div>
                                                <p className="text-gray-900 text-[14px] font-medium"><span className="font-extrabold text-[15px]">0</span> Recieved</p>
                                            </div>
                                        </>}
                                        collapsedColor={"bg-[#f2f2f2]"}
                                        expandedColor={"bg-[#f2f2f2]"}
                                    />
                                </div>
                            </div>
                            <div className="mt-16">
                                <div>
                                    <p className="text-[14px] font-medium text-[#196cc5]">Recieved</p>
                                </div>
                                <div>
                                    <FamilyRegisterAndComposition />
                                    <EvidenceOfPlannedTourism />
                                    <NationalIdentityDocument />
                                    <EvidenceOfFinancialStatus />
                                    <EvidenceOfCurrentEmployment />
                                    <TravelDocument />
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}