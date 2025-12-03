export default function IconAndLabel({label, icon, onClick}) {
    return (
        <div className="flex flex-col items-center text-[#152681]" onClick={onClick}>
            <div>{icon}</div>
            <p className="underline">{label}</p>
        </div>
    )
}