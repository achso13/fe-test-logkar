import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../UI/Button";
import Input from "../UI/Input";
import PasswordInput from "../UI/PasswordInput";

import { login } from "../../features/user/userSlice";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: {
      value: "",
      error: true,
      message: "",
    },
    password: {
      value: "",
      error: true,
      message: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let message = "";
    let error = false;
    if (name === "name") {
      if (value === "") {
        message = "Nama tidak boleh kosong";
        error = true;
      } else if (!/^.{3,30}$/.test(value)) {
        message = "Nama minimal 3 karakter dan maksimal 30 karakter";
        error = true;
      }
    } else if (name === "password") {
      if (value === "") {
        message = "Password tidak boleh kosong";
        error = true;
      } else if (!/^.{3,10}$/.test(value)) {
        message = "Password minimal 3 karakter dan maksimal 10 karakter";
        error = true;
      } else if (!/[A-Z]/.test(value)) {
        message = "Password harus mengandung minimal 1 huruf kapital";
        error = true;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: { value, error, message },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.error && !formData.password.error) {
      const data = {
        ...user,
        name: formData.name.value,
        password: formData.password.value,
      };

      dispatch(login(data));
      navigate("/");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Nama"
        placeholder="Masukkan Nama Anda"
        {...formData.name}
        onChange={handleChange}
      />
      <PasswordInput
        name="password"
        label="Password"
        placeholder={"Masukkan Password Anda"}
        {...formData.password}
        onChange={handleChange}
      />
      <div className="mx-auto">
        <Button
          type="submit"
          disabled={formData.name.error || formData.password.error}
          theme="primary"
        >
          Login
        </Button>
      </div>
    </form>
  );
}
