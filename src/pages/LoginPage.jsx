import { useSelector } from "react-redux";
import LoginForm from "../components/Forms/LoginForm";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const user = useSelector((state) => state.user);
  if (user.name) {
    return <Navigate to="/" replace={true} />;
  } else {
    return (
      <div className="flex flex-col p-4 h-screen justify-center gap-8 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-500">Login</h1>
          <p className=" text-gray-400">untuk masuk ke dalam aplikasi.</p>
        </div>

        <LoginForm />
      </div>
    );
  }
}
