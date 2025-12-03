import { CircleChevronDown, CircleChevronRight } from "lucide-react";
import { useState } from "react";

export default function ApplicationSingleList({name, subCategories, onClick}) {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <li className="flex gap-1 items-center text-[13px] font-semibold cursor-pointer" onClick={() => setExpanded(!expanded)}>
                {
                    expanded ? (
                        <CircleChevronDown size={13} className="bg-brand-dark text-[#fff] rounded-full"/>
                    ) : (
                        <CircleChevronRight size={13} className="bg-brand-dark text-[#fff] rounded-full"/>
                    )
                }
                <p>{name}</p>
            </li>
            <ul>
                {
                    expanded && (
                        subCategories.map((ele) => (
                            <li className="text-[12px] cursor-pointer font-medium" onClick={() => {ele.onClick && ele.onClick()}}>{ele.name}</li>
                        ))
                    )
                }
            </ul>
        </>
    )
}