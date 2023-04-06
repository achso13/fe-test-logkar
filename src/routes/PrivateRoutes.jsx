import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  // const user = localStorage.getItem("user");
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return <Outlet />;
  }
}
