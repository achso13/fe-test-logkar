export default function Button(props) {
  const { disabled, type, children, onClick, theme } = props;

  let style = "";

  if (theme === "primary") {
    style =
      "bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-1 px-4 rounded border border-blue-500 disabled:border-gray-400";
  } else if (theme === "outline") {
    style =
      "bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded disabled:bg-gray-400 disabled:border-gray-400";
  }

  return (
    <button type={type} className={style} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
