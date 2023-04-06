import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout";
import IncompleteProfile from "../components/UI/IncompleteProfile";
import Cart from "../components/UI/Cart";
import Modal from "../components/UI/Modal";
import PurchasingList from "../components/UI/PurchasingList";
import Button from "../components/UI/Button";
import { useState } from "react";

export default function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const carts = useSelector((state) => state.carts);
  const user = useSelector((state) => state.user);

  const isProfileCompleted = Object.values(user).every((item) => item !== "");

  const handleClick = () => {
    setIsModalOpen(false);
    setIsSuccess(true);
  };

  return (
    <Layout>
      {isProfileCompleted ? (
        <div className="grid grid-cols-1">
          {isSuccess ? (
            "Yayy, order success"
          ) : (
            <>
              {carts.map((cart) => (
                <Cart key={cart.episode_id} cart={cart} />
              ))}
            </>
          )}
          <Modal
            modalTitle="Purchasing List"
            buttonTitle="Review"
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            <PurchasingList />
            <Button onClick={handleClick}>Order</Button>
          </Modal>
        </div>
      ) : (
        <IncompleteProfile />
      )}
    </Layout>
  );
}
