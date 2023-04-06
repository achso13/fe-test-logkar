export default function Button(props) {
  const { disabled, type, children, onClick } = props;
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-8 rounded"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
