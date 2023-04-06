import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../features/user/userSlice";

import Button from "../UI/Button";
import Input from "../UI/Input";

export default function UserForm({ setIsModalOpen }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const initialData = {
    name: {
      value: user.name,
      error: user.name === "",
      message: "",
    },
    email: {
      value: user.email,
      error: user.email === "",
      message: "",
    },
    phone: {
      value: user.phone,
      error: user.phone === "",
      message: "",
    },
    address: {
      value: user.address,
      error: user.address === "",
      message: "",
    },
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    return () => {
      setFormData(initialData);
    };
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;

    let message = "";
    let error = false;

    if (name === "name") {
      if (value === "") {
        message = "Nama tidak boleh kosong";
        error = true;
      }
    } else if (name === "phone") {
      if (value === "") {
        message = "Nomor telepon tidak boleh kosong";
        error = true;
      } else if (isNaN(value)) {
        message = "Nomor telepon harus berupa angka";
        error = true;
      } else if (value[0] === "0") {
        message = "Nomor telepon tidak boleh diawali dengan 0";
        error = true;
      } else if (!/^\d{10,13}$/.test(value)) {
        message = "Nomor telepon minimal 10 digit dan maksimal 13 digit";
        error = true;
      }
    } else if (name === "address") {
      if (value === "") {
        message = "Alamat tidak boleh kosong";
        error = true;
      }
    } else if (name === "email") {
      if (value === "") {
        message = "Email tidak boleh kosong";
        error = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Email tidak valid";
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

    const data = {
      ...user,
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
      address: formData.address.value,
    };

    if (
      !formData.name.error &&
      !formData.email.error &&
      !formData.phone.error &&
      !formData.address.error
    ) {
      dispatch(updateUser(data));
      setIsModalOpen(false);
    }
    setFormData(initialData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Nama"
        placeholder="Masukkan Nama Anda"
        {...formData.name}
        onChange={handleChange}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Masukkan Email Anda"
        {...formData.email}
        onChange={handleChange}
      />

      <Input
        type="number"
        name="phone"
        label="Nomor Telepon"
        placeholder="Masukkan Nomor Telepon Anda"
        {...formData.phone}
        onChange={handleChange}
      />

      <Input
        type="text"
        name="address"
        label="Alamat"
        placeholder="Masukkan Alamat Anda"
        {...formData.address}
        onChange={handleChange}
      />

      <div className="mx-auto">
        <Button
          type="submit"
          disabled={
            formData.name.error ||
            formData.email.error ||
            formData.phone.error ||
            formData.address.error
          }
          theme="primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
