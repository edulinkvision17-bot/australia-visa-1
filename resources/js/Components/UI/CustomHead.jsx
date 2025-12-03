export default function CustomHead({heading}) {
    return (
        <>
            <div className="bg-main-nav text-[#fff] text-[13px] font-extrabold h-[31px] px-3 flex items-center">
                {heading}
            </div>
        </>
    )
}