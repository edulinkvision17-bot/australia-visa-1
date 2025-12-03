import { CircleQuestionMark, Info } from "lucide-react";
import DetailHead from "../DetailHead";
import Table from "@/Components/UI/Table";
import { router } from "@inertiajs/react";

export default function ApplicationHome() {

    const columns = [
        {
            key: "type",
            header: "Type",
            render: (row) => (
            <span className="font-[1000]">{row.type}</span>
            ),
        },
        {
            key: "date",
            header: "Date",
        },
        {
            key: "action",
            header: "Action",
            render: (row) => (
            <button
                className="text-[#201c64] underline"
                onClick={() => router.visit(route("immi.viewReciept"))}
            >
                {row.actionLabel}
            </button>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            type: "Application submitted",
            date: "29 Oct 2025",
            actionLabel: "View application",
        },
        {
            id: 2,
            type: "Application fee paid",
            date: "29 Oct 2025",
            actionLabel: "View receipt",
        },
    ];
    return (
        <div>
            <div className="flex items-center gap-1">
                <DetailHead heading={"Application home"}/>
                <CircleQuestionMark size={16} className="text-[#196cc5]"/>
            </div>
            <div className="mt-2 text-[16px]">
                <div className="flex gap-1">
                    <p className="font-bold">Application status:</p>
                    <p className="font-bold">Finalised</p>
                </div>
                <div className="mt-2">
                    <p className="font-bold">Applicants</p>
                    <ul className="pl-2">
                        <li className="list-disc list-inside">SINGH, Harvinder (20 Oct 2003) - Finalised</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-1 items-center mt-1">
                <Info size={15} className="bg-[#9c211e] rounded-full text-[#fff]"/>
                <p className="text-[#196cc5] text-[14px] font-semibold">Important information</p>
            </div>
            <p className="text-[16px]">This application has been finalised. Please refer to messages.</p>
            <div className="mt-5">
                <p className="text-[15px] text-[#196cc5] font-bold">Application history</p>
                <div>
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </div>
    )
}