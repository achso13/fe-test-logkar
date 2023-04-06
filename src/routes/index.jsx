import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import StorePage from "../pages/StorePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/store" element={<StorePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
