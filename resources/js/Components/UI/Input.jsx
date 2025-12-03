export default function Input({type, placeholder, name, value, onChange}) {
    return (
        <>
            <input
                type={type} 
                className="w-full h-5 border border-black px-[1px]"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e) => {onChange(e.target.name, e.target.value)}}
            />
        </>
    )
}