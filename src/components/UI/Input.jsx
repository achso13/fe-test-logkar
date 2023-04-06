export default function Input(props) {
  const { type, name, label, placeholder, value, onChange, message } = props;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        className={`p-2 border-gray-300 border-2 rounded outline-none ${
          message
            ? "focus:border-red-400 border-red-400"
            : "focus:border-blue-400"
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="text-red-500">{message}</p>
    </div>
  );
}
