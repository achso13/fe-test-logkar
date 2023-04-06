import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const user = useSelector((state) => state.user);

  if (!user.name) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return <Outlet />;
  }
}
