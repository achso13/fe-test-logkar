import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  buttonTitle,
  modalTitle,
  isModalOpen,
  setIsModalOpen,
  children,
}) {
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button theme="primary" onClick={toggleModal}>
        {buttonTitle}
      </Button>

      {isModalOpen && (
        <>
          <div
            className="fixed left-0 top-0 h-screen w-screen bg-black/50"
            onClick={() => toggleModal()}
          ></div>

          <div className="fixed left-1/2 top-8 w-11/12 -translate-x-1/2 rounded-md bg-white px-4 pb-8 pt-8 shadow md:w-1/2">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-center text-xl font-bold">{modalTitle}</h1>
              <button
                className="text-xl hover:text-red-500"
                onClick={() => toggleModal()}
              >
                <AiOutlineClose className="hover:text-red-500" />
              </button>
            </div>
            {children}
          </div>
        </>
      )}
    </>
  );
}
