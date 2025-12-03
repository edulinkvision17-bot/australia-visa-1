import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("")
    return (
        <div className="flex">
            <Input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button 
                label={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>}
                // onClick={rightOnClick}   
            />
        </div>
    )
}