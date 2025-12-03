import Button from "./Button";

export default function ButtonGroup({showLeftBtn = true, showRightBtn = true, leftBtnLabel, rightBtnLabel, leftOnClick, rightOnClick, bgColor="bg-bg-primary"}) {
    return (
        <div className={`w-full p-2 ${bgColor} flex justify-between mt-4`}>
            {
                showLeftBtn && (
                    <Button 
                        label={leftBtnLabel}
                        onClick={leftOnClick}
                    />
                )
            }
            {
                showRightBtn && (
                    <Button 
                        label={rightBtnLabel}
                        onClick={rightOnClick}
                    />
                )
            }
        </div>
    )
}