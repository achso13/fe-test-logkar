import { Link } from "react-router-dom";

export default function IncompleteProfile() {
  return (
    <div>
      <p>
        Anda harus mengisi data diri di halaman home sebelum dapat melihat
        barang yang tersedia.
      </p>
      <Link to="/">kembali ke Home</Link>
    </div>
  );
}
