import { useDispatch } from "react-redux";
import Button from "./Button";
import { decrementCart, incrementCart } from "../../features/cart/cartSlice";

export default function Cart({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="my-4 flex items-center justify-between gap-3">
      <div className="grid w-full grid-cols-2">
        <div className="mr-2 inline-block h-[100px] w-[100px] rounded bg-gray-300"></div>
        <p className="align-top">{cart.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          theme="outline"
          onClick={() => dispatch(decrementCart(cart.episode_id))}
        >
          -
        </Button>
        <span className="text-lg">{cart.quantity}</span>
        <Button
          theme="outline"
          onClick={() => dispatch(incrementCart(cart.episode_id))}
        >
          +
        </Button>
      </div>
    </div>
  );
}
