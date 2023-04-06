import { useDispatch } from "react-redux";
import { decrementCart, incrementCart } from "../../features/cart/cartSlice";

export default function Cart({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src="" alt="" />
        <p>{cart.title}</p>
      </div>
      <div className="flex flex-row gap-4">
        <button onClick={() => dispatch(decrementCart(cart.episode_id))}>
          -
        </button>
        <p>{cart.quantity}</p>
        <button onClick={() => dispatch(incrementCart(cart.episode_id))}>
          +
        </button>
      </div>
    </div>
  );
}
