import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addCart, removeCart } from "../../features/cart/cartSlice";

export default function Card({ film }) {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <img src="" alt="" />
      <p>{film.title}</p>
      {carts.find((item) => item.episode_id === film.episode_id) ? (
        <Button onClick={() => dispatch(removeCart(film))}>Remove</Button>
      ) : (
        <Button onClick={() => dispatch(addCart(film))}>Add</Button>
      )}
    </div>
  );
}
