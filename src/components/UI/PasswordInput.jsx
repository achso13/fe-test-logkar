import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function PasswordInput(props) {
  const { name, label, value, onChange, message, placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={`p-2 border-gray-300 border-2 rounded outline-none w-full pr-12 ${
            message
              ? "focus:border-red-400 border-red-400"
              : "focus:border-blue-400"
          }`}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          value={value}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible
            className="cursor-pointer absolute top-[10px] right-4 w-6 h-6"
            onClick={toggleShowPassword}
          />
        ) : (
          <AiOutlineEye
            className="cursor-pointer absolute top-[10px] right-4 w-6 h-6"
            onClick={toggleShowPassword}
          />
        )}
      </div>
      <p className="text-red-500">{message}</p>
    </div>
  );
}
