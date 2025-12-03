import { CircleCheck, CircleQuestionMark } from "lucide-react";
import CollapsibleRow from "../CollapsibleRow";
import Table from "@/Components/UI/Table";

export default function FamilyRegisterAndComposition() {
    const columns = [
        {
            key: "document_type",
            header: "Document Type",
            render: (row) => (
                <div className="flex items-center gap-2">
                    <CircleCheck size={15} className="text-[#5f8e5a]"/>
                    <p>{row.document_type}</p>
                </div>
            ),
        },
        {
            key: "file_name",
            header: "File Name",
        },
        {
            key: "date_recieved",
            header: "Date Recieved",
        },
    ];

    const data = [
        {
            id: 1,
            document_type: "Form 54 - Family Composition",
            file_name: "Family Info.pdf",
            date_recieved: "28 Oct 2025",
        },
    ];
    return (
        <CollapsibleRow 
            collapsedView={<>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <p className="text-[13px] font-bold text-[#024d9e]">Family Register and composition form (if applicable)</p>
                        <CircleQuestionMark size={14} className="bg-[#024d9e] text-[#fff] rounded-full"/>
                    </div>
                    <p className="text-gray-900 text-[14px] font-medium"><span className="font-extrabold text-[15px]">1</span> Recieved</p>
                </div>
            </>}
            expandedView={<>
                <div>
                    <div>
                        <Table columns={columns} data={data} />
                    </div>
                </div>
            </>}
            collapsedColor={"bg-[#f2f2f2]"}
            expandedColor={"bg-[#f2f2f2]"}
        />
    )
}