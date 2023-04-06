import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addCart, removeCart } from "../../features/cart/cartSlice";

export default function Card({ film }) {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between rounded bg-white shadow">
      <div className="h-[100px] w-full rounded bg-gray-300"></div>

      <p className="my-2 px-2 text-sm font-medium">{film.title}</p>

      <div className="flex flex-col p-2">
        {carts.find((item) => item.episode_id === film.episode_id) ? (
          <Button onClick={() => dispatch(removeCart(film))} theme="primary">
            Remove
          </Button>
        ) : (
          <Button onClick={() => dispatch(addCart(film))} theme="outline">
            Add
          </Button>
        )}
      </div>
    </div>
  );
}
