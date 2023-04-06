import { FcPaid } from "react-icons/fc";
export default function OrderSuccess() {
  return (
    <div className="mb-8 mt-4 text-center">
      <FcPaid className="mx-auto my-4 text-[180px]" />
      <h1 className="text-2xl font-bold">Yayy, order success!</h1>
    </div>
  );
}
