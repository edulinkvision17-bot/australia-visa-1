import Button from "@/Components/UI/Button"
import { router } from "@inertiajs/react"
import { Copy, FileUser, FolderOpen, Forward, Trash2 } from "lucide-react"

export default function SingleList({index, name, dob, type,referenceNumber, lastUpdated, dateSubmitted, typeDetail, status, expanded, setExpanded}) {
    return (
        <>
            <div className={`w-full h-[75px]  ${expanded === index ? "bg-[#f2f2f2]" : "bg-[#d8f0fc]"} border border-[#c6d3de] ${expanded === index && "border-t-2 border-t-[#eb7a38]"} p-1 flex gap-10`}>
                <div className="flex items-center">
                    {
                        expanded === index ? (
                            <p className="cursor-pointer" onClick={() => {setExpanded(null)}}>-</p>
                        ) : (
                            <p className="cursor-pointer" onClick={() => {setExpanded(index)}}>+</p>
                        )
                    }
                </div>
                <div className="leading-none">
                    <div className="leading-tight flex gap-2 text-text-primary text-[18px] font-[400]">
                        <p>
                            {name}
                        </p>
                        <p>
                            ({dob})
                        </p>
                    </div>
                    <p className="text-[13px]">{type}</p>
                    <p className="text-[13px] font-bold">{status}</p>
                </div>
            </div>
            {
                expanded === index && (
                    <div className="p-2 border border-[#d9d9de] border-t-0">
                        <div className="border-t-0 text-[13px] text-gray-800 flex flex-col gap-2 pb-5">
                            <div className="flex justify-between">
                                <div className="w-[50%] flex gap-10">
                                    <p className="w-[150px]">Reference No</p>
                                    <p>{referenceNumber}</p>
                                </div>
                                <div className="w-[50%] flex gap-10">
                                    <p className="w-[150px]">Last updated</p>
                                    <p>{lastUpdated}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-[50%] flex gap-10">
                                    <p className="w-[150px]">Type</p>
                                    <p>{typeDetail}</p>
                                </div>
                                <div className="w-[50%] flex gap-10">
                                    <p className="w-[150px]">Date submitted</p>
                                    <p>{dateSubmitted}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start border-t-2 border-[#f3f3f5] pt-2">
                            <div className="w-[50%]">
                                <Button
                                    label={<div className="flex items-center gap-2  font-thin text-[13px]">
                                        <FolderOpen size={15}/>
                                        <p>View details</p>
                                    </div>}
                                    className={"border-[#a9a9a9]"}
                                    onClick={() => router.visit(route("immi.detail"))}
                                />
                            </div>
                            <div className="w-[50%] flex font-thin text-[12px] text-[#011d3f] gap-1">
                                <div className="flex items-center cursor-pointer">
                                    <Copy size={13}/>
                                    <p className="underline">Copy</p>
                                </div>
                                <div className="flex items-center cursor-pointer">
                                    <FileUser size={13}/>
                                    <p className="underline">Update details</p>
                                </div>
                                <div className="flex items-center cursor-pointer">
                                    <Trash2 size={13}/>
                                    <p className="underline">Remove</p>
                                </div>
                                <div className="flex items-center cursor-pointer">
                                    <Forward size={13}/>
                                    <p className="underline">Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
} 