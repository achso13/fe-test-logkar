import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex flex-row justify-between bg-white p-4 shadow md:px-8">
      <div className="flex gap-4">
        <Link
          to="/"
          className={`border-b-[1px] ${
            pathname === "/"
              ? "border-blue-500 font-semibold text-blue-500"
              : "border-transparent"
          } hover:text-blue-400`}
        >
          Home
        </Link>
        <Link
          to="/store"
          className={`border-b-[1px] ${
            pathname === "/store"
              ? "border-blue-500 font-semibold text-blue-500"
              : "border-transparent"
          } hover:text-blue-400`}
        >
          Store
        </Link>
        <Link
          to="/cart"
          className={`border-b-[1px] ${
            pathname === "/cart"
              ? "border-blue-500 font-semibold text-blue-500"
              : "border-transparent"
          } hover:text-blue-400`}
        >
          Shopping Cart
        </Link>
      </div>

      <span
        className="cursor-pointer hover:text-blue-500"
        onClick={handleLogout}
      >
        Logout
      </span>
    </nav>
  );
}
