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
      <div className="mx-auto max-w-md">
        <h1 className="my-4 text-center text-3xl font-semibold">Data Diri</h1>
        <div className="mb-8 mt-4 grid grid-cols-1 gap-2">
          <div className="mb-3 grid grid-cols-5">
            <p className="col-span-1 font-medium">Nama</p>
            <p className="col-span-4 break-all border-b-[1px] border-gray-400 px-1">
              {user?.name || "-"}
            </p>
          </div>
          <div className="mb-3 grid grid-cols-5">
            <p className="col-span-1 font-medium">Email</p>
            <p className="col-span-4 break-all border-b-[1px] border-gray-400 px-1">
              {user?.email || "-"}
            </p>
          </div>
          <div className="mb-3 grid grid-cols-5">
            <p className="col-span-1 font-medium">Telepon</p>
            <p className="col-span-4 break-all border-b-[1px] border-gray-400 px-1">
              {user?.phone || "-"}
            </p>
          </div>
          <div className="mb-3 grid grid-cols-5">
            <p className="col-span-1 font-medium">Alamat</p>
            <p className="col-span-4 break-all border-b-[1px] border-gray-400 px-1">
              {user?.address || "-"}
            </p>
          </div>
        </div>
        <div className="my-4 flex justify-center">
          <Modal
            modalTitle="Edit Data Diri"
            buttonTitle="Lengkapi data diri anda"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            <UserForm setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      </div>
    </Layout>
  );
}
