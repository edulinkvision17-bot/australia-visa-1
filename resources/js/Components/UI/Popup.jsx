import { Expand, X } from "lucide-react";
import Button from "./Button";

const presetWidthClass = (w) => {
    switch (w) {
        case "full":
        return "w-full max-w-screen-xl";
        case "sm":
        return "w-full max-w-sm";
        case "md":
        return "w-full max-w-md";
        case "lg":
        return "w-full max-w-lg";
        case "xl":
        return "w-full max-w-xl";
        case "2xl":
        return "w-full max-w-2xl";
        case "3xl":
        return "w-full max-w-3xl";
        default:
        // allow passing custom width classes like 'max-w-3xl' or raw tailwind width string
        return w || "w-full max-w-2xl";
    }
};

const Popup = ({
    isOpen = false,
    onClose = () => {},
    title = null,
    headerActions = [],
    width = "md",
    children,
    footer = null,
    showClose = true,
    closeOnOverlayClick = true,
    className = "",
}) => {
if (!isOpen) return null;


const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) onClose();
};


return (
// overlay
<div
    className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/40 p-4 sm:p-6"
    onMouseDown={handleOverlayClick}
    aria-modal="true"
    role="dialog"
>
    {/* panel */}
    <div
        className={`relative mt-12 ${presetWidthClass(width)} bg-white rounded-lg shadow-2xl ring-1 ring-black/5 ${className}`}
        onMouseDown={(e) => e.stopPropagation()} // prevent clicks inside from bubbling to overlay
        role="document"
    >
        {/* header */}
        <div className="flex items-center justify-between gap-2 px-2 pr-3 py-3">
            <div className="flex items-center gap-3">
                {title ? (
                    <h1 className="text-sm font-medium leading-6 text-[#0649a0] text-[25px]">{title}</h1>
                ) : null}
            </div>


            <div className="flex items-center gap-2 -translate-y-2">
                {Array.isArray(headerActions) &&
                    headerActions.map((action, idx) => (
                        <div key={idx} className="inline-flex items-center">
                            {action}
                        </div>
                    ))
                }


                {showClose && (
                    <Button
                        type="button"
                        label={<X size={13} strokeWidth={4}/>}
                        onClick={onClose}
                        className="inline-flex px-[4px] py-[2px] bg-[#ffffff] border-1 border-[#d1d0d0] rounded-sm"
                        aria-label="Close"
                    />
                )}
            </div>
        </div>


        {/* body */}
        <div className="px-3 pt-4 pb-1 max-h-[70vh] overflow-auto">
            {children}
        </div>          


        {/* footer */}
        {footer ? (
            <div>
                <div className="px-2 flex justify-end gap-2 mb-2">
                    {footer}
                </div>
                <div className="bg-[#f2f2f2] h-8 w-full rounded-lg flex items-center justify-end pr-2">
                    <Expand size={15} className="text-[#767575]"/>
                </div>
            </div>
            ) : null}
        </div>
</div>
);
};


export default Popup;