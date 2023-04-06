import { useSelector } from "react-redux";

export default function PurchasingList() {
  const carts = useSelector((state) => state.carts);

  return (
    <table className="my-8 w-full">
      <thead>
        <tr className="text-left">
          <th>Name</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        {carts.map((cart) => (
          <tr key={cart.episode_id}>
            <td>{cart.title}</td>
            <td>{cart.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
