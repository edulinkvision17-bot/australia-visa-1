import Button from "@/Components/UI/Button";
import Select from "@/Components/UI/Select";
import { ArrowDownWideNarrow, RefreshCw } from "lucide-react";
import { useState } from "react";

export function ApplicationFilter() {
    const [filter, setFilter] = useState("last_updated");

    const multiOptions = [
        { value: "last_updated", label: "Last updated" },
        { value: "last_added", label: "Last added" },
    ];

    const handleFilterChange = (value) => {
        console.log("Value", value) 
        setFilter(value)
    }
    return (
        <div className="flex gap-2 items-center">
            <p>Sort by</p>
            <div>
                <div className="flex">
                    <Select
                        value={filter}
                        onChange={handleFilterChange}
                        placeholder="Choose an option"
                        options={multiOptions}
                    />
                    <Button 
                        label={<ArrowDownWideNarrow size={15}/>}
                        // onClick={rightOnClick}   
                    />
                </div>
            </div>
            <div className="flex items-center cursor-pointer">
                <RefreshCw size={15}/>
                <p className="underline">Refresh</p>
            </div>
        </div>
    )
}