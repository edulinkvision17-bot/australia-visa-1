import { CircleQuestionMark } from "lucide-react";
import DetailHead from "../DetailHead";
import Table from "@/Components/UI/Table";

export default function UpdateDetail() {
    const columns = [
        {
            key: "update",
            header: "Update",
            // render: (row) => (
            // <span className="font-[1000]">{row.update}</span>
            // ),
        },
        {
            key: "client",
            header: "Client",
        },
        {
            key: "status",
            header: "Status",
        },
        {
            key: "action",
            header: "Action",
            render: (row) => (
                <div className="flex items-center gap-4"> 
                    <button
                        className="text-[#201c64] underline"
                        onClick={() => router.visit(route("immi.viewReciept"))}
                    >
                        Edit
                    </button>
                    <button
                        className="text-[#201c64] underline"
                        onClick={() => router.visit(route("immi.viewReciept"))}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            update: "Change of passport details",
            client: "Singh, Harvinder (20 Oct 2003)",
            status: "Incomplete 18 Nov 2025",
        },
        {
            id: 2,
            update: "Change of passport details",
            client: "Singh, Harvinder (20 Oct 2003)",
            status: "Incomplete 12 Nov 2025",
        },
    ];
    return (
        <div>
            <div className="flex items-center gap-1">
                <DetailHead heading={"Update details"}/>
                <CircleQuestionMark size={16} className="text-[#196cc5]"/>
            </div>
            <p className="text-[16px]">You can provide updated information to the department using the links below.</p>
            <div>
                <p className="text-[16px] underline leading-none text-[#190387]">Change of address details</p>
                <p className="text-[16px] underline leading-none text-[#190387]">Change of contact telephone numbers</p>
                <p className="text-[16px] underline leading-none text-[#190387]">Change of email address details</p>
                <p className="text-[16px] underline leading-none text-[#190387]">Change of passport details</p>
            </div>
            <div className="mt-2">
                <p className="text-[#196cc5] text-[14px] font-semibold">List of updates provided</p>
                <div>
                    <Table columns={columns} data={data} />
                </div>
                <div></div>
            </div>
        </div>
    )
}