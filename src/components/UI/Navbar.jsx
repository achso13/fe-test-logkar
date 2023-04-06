import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-gray-300 flex flex-row justify-between p-4 md:px-8">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Shopping Cart</Link>
      </div>

      <span className="cursor-pointer" onClick={handleLogout}>
        Logout
      </span>
    </nav>
  );
}
