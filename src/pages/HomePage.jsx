import { useState } from "react";
import UserForm from "../components/Forms/UserForm";
import Layout from "../components/UI/Layout";
import Modal from "../components/UI/Modal";
import { useSelector } from "react-redux";

export default function HomePage() {
  const user = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div>
        <p>Name: {user?.name || "-"}</p>
        <p>Email: {user?.email || "-"}</p>
        <p>Telepon: {user?.phone || "-"}</p>
        <p>Alamat: {user?.address || "-"}</p>
      </div>
      <div className="mx-auto">
        <Modal
          modalTitle="Edit Data Diri"
          buttonTitle="Lengkapi data diri anda"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <UserForm />
        </Modal>
      </div>
    </Layout>
  );
}
