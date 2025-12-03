export default function Button({label, onClick, className}) {
    return (
        <>
            <button 
                className={`px-2 border border-black bg-bg-btn text-text-textDark font-semibold ${className}`}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}