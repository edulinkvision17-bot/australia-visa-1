import { UserAuthenticatedLayout } from "@/Layouts/UserAuthenticatedLayout";
import TopNav from "@/Components/UI/TopNav";
import CustomHead from "@/Components/UI/CustomHead";
import Button from "@/Components/UI/Button";
import { CircleQuestionMark, CreditCard, FileText } from "lucide-react";
import Input from "@/Components/UI/Input";
import Table2 from "@/Components/UI/Table2";
import Pagination from "./Pagination";

export default function ViewReciept() {

    const columns = [
  { key: 'type', header: 'Type', className: 'w-1/12' },
  { key: 'reference', header: 'Reference No', className: 'w-2/12' },
  { key: 'name', header: 'Name', className: 'w-3/12' },
  { key: 'transactionDate', header: 'Transaction Date', className: 'w-2/12' },
  { key: 'issuingOffice', header: 'Issuing Office', className: 'w-1/12' },
  { key: 'internalRef', header: 'Internal Ref.', className: 'w-1/12' },
  { key: 'currency', header: 'Currency', className: 'w-1/12' },
  { key: 'amount', header: 'Amount', className: 'w-1/12' },
  { key: 'status', header: 'Status', className: 'w-1/12' },
  { key: 'action', header: 'Select Action', className: 'w-1/12', render: (r) => (<div className="text-sm text-gray-600">Actions ▾</div>)}
];

const data = [
  {
    id: 1,
    type: 'Invoice',
    reference: 'EGP9VAL4YA',
    name: 'SINGH, Harvinder',
    transactionDate: '29 Oct 2025',
    issuingOffice: 'Online',
    internalRef: '200051832325',
    currency: 'AUD',
    amount: '200.00',
    status: 'Paid',
    actionUrl: '/invoices/1'
  }
];
    return (
        <>
            <UserAuthenticatedLayout title="Online Payments">
                <TopNav 
                    notShow={["My payments", "Manage groups", "Related Links", "Help and Support"]}
                />
                <div className="pt-6 pb-3 px-1">
                    <CustomHead heading={"Manage Payments"}/>
                    <div className="bg-bg-secondary pt-6 pl-3 pr-1 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                                <Button 
                                    className={"border-[#c8c6c6] py-0 font-normal text-[12px] h-5 rounded-sm"}
                                    label={<div className="flex items-center justify-between gap-1">
                                        <CreditCard size={12}/>
                                        <p>Pre-pay paper service</p>
                                    </div>}
                                />
                                <Button 
                                    className={"border-[#c8c6c6] font-normal text-[12px] h-5 rounded-sm"}
                                    label={<div className="flex items-center justify-between gap-1">
                                        <FileText size={12}/>
                                        <p>Pay an Invoice</p>
                                    </div>}
                                />
                            </div>
                            <div><CircleQuestionMark size={16} className="text-[#196cc5]"/></div>
                        </div>
                        <div className="flex gap-1 justify-end mt-3 underline text-[#2b57c7] text-[13px]">
                            <p className="cursor-pointer">Advanced Search</p>
                            <p className="cursor-pointer">Print Summary</p>
                        </div>
                        <div className="flex justify-end gap-1 items-center">
                            <p className="text-[12px]">Filter/Search:</p>
                            <div className="w-[150px]">
                                <Input 
                                    type={"text"}
                                    name="search"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Table2 columns={columns} data={data} />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </UserAuthenticatedLayout>
        </>
    )
}