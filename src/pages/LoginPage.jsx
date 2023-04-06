import LoginForm from "../components/Forms/LoginForm";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  if (localStorage.getItem("user")) {
    return <Navigate to="/" replace={true} />;
  } else {
    return <LoginForm />;
  }
}
