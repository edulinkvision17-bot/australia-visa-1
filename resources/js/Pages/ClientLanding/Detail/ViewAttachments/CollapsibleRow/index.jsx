import { useState } from "react"

export default function CollapsibleRow({collapsedView, expandedView, collapsedColor, expandedColor}) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            <div className={`w-full flex gap-2 ${!isExpanded ? collapsedColor : expandedColor} h-[60px] border border-[#ccdce4] ${isExpanded && "border-t-2 border-t-[#d0612f]"} p-1`}>
                <div className="flex items-center justify-center">
                    {
                        isExpanded ? (
                            <p className="cursor-pointer" onClick={() => setIsExpanded(false)}>-</p>
                        ) : (
                            <p className="cursor-pointer" onClick={() => setIsExpanded(true)}>+</p>
                        )
                    }
                </div>
                <div>
                    {collapsedView}
                </div>
            </div>
            {
                isExpanded && (
                    <div className="border border-[#ccdce4] border-t-0 px-2 py-4">
                        {expandedView}
                    </div>
                )
            }
        </>
    )
}