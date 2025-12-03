import Button from "@/Components/UI/Button";
import Select from "@/Components/UI/Select";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";

export function Pagination({hideInfo = false}) {
    const [currentPage, setCurrentPage] = useState(1)

    const pages = [
        {value: 1, label: "1"},
        {value: 2, label: "2"},
        {value: 3, label: "3"},
        {value: 4, label: "4"},
        {value: 5, label: "5"}
    ]

    const handlePageChange = (value) => {
        console.log("Page", value)
        setCurrentPage(value)
    }
    return (
        <div className="flex items-center gap-4">
            {
                !hideInfo && (
                    <div className="flex items-center">
                        <p>
                            1
                        </p>&nbsp;-&nbsp;
                        <p>
                            1
                        </p>&nbsp;of&nbsp; 
                        <p>
                            1
                        </p>&nbsp;
                        <p>
                            results
                        </p>
                    </div>
                )
            }
            <div className="flex gap-1">
                <p>Page</p>
                <div className="w-10">
                    <Select
                        options={pages}
                        value={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Button 
                    className="bg-[#eeeeee] border-[#c1c0c0] rounded-sm text-[#c1c0c0]"
                    label={<ChevronsLeft />}
                />
                <Button 
                    className="bg-[#eeeeee] border-[#c1c0c0] rounded-sm text-[#c1c0c0]"
                    label={<ChevronLeft />}
                />
                <Button 
                    className="bg-[#eeeeee] border-[#c1c0c0] rounded-sm text-[#c1c0c0]"
                    label={<ChevronRight />}
                />
                <Button 
                    className="bg-[#eeeeee] border-[#c1c0c0] rounded-sm text-[#c1c0c0]"
                    label={<ChevronsRight />}
                />
            </div>
        </div>
    )
}