import Button from "@/Components/UI/Button";

export default function Pagination() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-[12px]">Showing {1} of {1} entries</p>
            </div>
            <div className="flex items-center gap-1">
                <Button 
                    className={"h-5 text-[12px] bg-[#dbdbdc] border-[#575757] text-[#575757] rounded font-normal"}
                    label={"First"}
                />
                <Button 
                    className={"h-5 text-[12px] bg-[#dbdbdc] border-[#575757] text-[#575757] rounded font-normal"}
                    label={"Previous"}
                />
                <Button 
                    className={"h-5 text-[12px] bg-[#dbdbdc] border-[#575757] text-[#575757] rounded font-normal"}
                    label={"1"}
                />
                <Button 
                    className={"h-5 text-[12px] bg-[#dbdbdc] border-[#575757] text-[#575757] rounded font-normal"}
                    label={"Next"}
                />
                <Button 
                    className={"h-5 text-[12px] bg-[#dbdbdc] border-[#575757] text-[#575757] rounded font-normal"}
                    label={"Last"}
                />
            </div>
        </div>
    )
} 