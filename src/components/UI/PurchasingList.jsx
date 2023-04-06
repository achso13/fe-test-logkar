import { useSelector } from "react-redux";

export default function PurchasingList() {
  const carts = useSelector((state) => state.carts);

  return (
    <table>
      <thead>
        <tr>
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
