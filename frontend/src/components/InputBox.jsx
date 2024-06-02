function InputBox(props) {
  return (
    <>
      <div className="text-sm font-medium text-left py-2">{props.label}</div>
      <input
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </>
  );
}

export default InputBox;
