import { ChevronDown } from "lucide-react";

export default function AdvancedSearch() {
    return (
        <>
            <div className="flex items-end">
                <ChevronDown size={15}/>
                <p className="underline">Advanced Search</p>
            </div>
        </>
    )
}