const AttachmentBox = ({ label, children }) => {
  return (
    <fieldset className="border border-[#bdbcbc] px-3 pb-2 relative">
      <legend className="text-[15px] font-extrabold text-[#000]">
        {label}
      </legend>

      {/* Content goes here */}
      <div className="mt-1">
        {children}
      </div>
    </fieldset>
  );
};

export default AttachmentBox;
