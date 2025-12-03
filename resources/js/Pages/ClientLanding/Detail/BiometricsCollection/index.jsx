import { CircleQuestionMark } from "lucide-react";
import DetailHead from "../DetailHead";
import CollapsibleRow from "../ViewAttachments/CollapsibleRow";

export default function BiometricsCollection() {
    return (
        <div>
            <div className="flex items-center gap-1">
                <DetailHead heading={"Biometrics collection"}/>
                <CircleQuestionMark size={16} className="text-[#196cc5]"/>
            </div>
            <p className="text-[16px]">Applicants may be required to provide persoal identifiers, or biometrics, in support of their application.</p>
            <div className="mt-2">
                <p className="text-[16px]">These can include:</p>
                <ul className="list-disc list-inside leading-tight">
                    <li>A photograph of the applicant's head and shoulders</li>
                    <li>Fingerprint collected at an Australian Biometrics Collection Center</li>
                </ul>
            </div>
            <p className="text-[16px] mt-2 ">For further information on <span className="cursor-pointer underline text-[#190387]">Biometrics collection</span> review the details on the Department's website.</p>
            <div>
                <CollapsibleRow 
                    collapsedColor={"bg-[#d8f0fc]"}
                    expandedColor={"bg-[#f2f2f2]"}
                    collapsedView={<>
                        <div className="flex items-center gap-1 text-[#196cc5]">
                            <p>SINGH. Harvinder</p>
                            <p>(20 Oct 2003)</p>
                        </div>
                        <p className="text-gray-900 text-[14px] font-medium">No further action required.</p>
                    </>}
                    expandedView={<>
                        <div>
                            <p className="text-gray-900 text-[14px] font-medium">No further action is required from the applicant at this time.</p>
                            <p className="text-gray-900 text-[14px] font-medium">The department will send a further request if any additional action is required from the applicant to meet the biometrics requirement.</p>
                        </div>
                    </>}
                />
            </div>
        </div>
    )
}