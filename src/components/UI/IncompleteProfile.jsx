import { Link } from "react-router-dom";

export default function IncompleteProfile() {
  return (
    <div className="mx-auto max-w-md text-center">
      <div className="my-8">
        <p className="text-gray-500">
          Anda harus mengisi data diri di halaman home sebelum dapat melihat
          barang yang tersedia.
        </p>
      </div>
      <Link
        to="/"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        kembali ke Home
      </Link>
    </div>
  );
}
