import { loginUser } from "@/feature/userSlice";
import { customFetch } from "@/utils";
import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbNumber12Small } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const actions =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response = await customFetch.post("/user/login", data);
			store.dispatch(loginUser(response.data));
			toast.success("Login Successfully 🧑🏻‍💻✌︎...");
      console.log(data)
			return redirect("/");
		} catch (error) {
			const errorMassage =
				error?.response?.data?.error?.message ||
				"Please Check your Credentials 📝";
			toast.error(errorMassage);
			return null;
		}
	};
function Login() {
  const navigate = useNavigate();
	const dispatch = useDispatch();


  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <div> </div>
      <div className="bg-blue-600 max-w-80 grid gap-5">
        <h1 className="text-4xl font-bold text-white">Login</h1>

        <form action="" method="post" className="space-y-6 text-black">
          <div className="relative">
            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
              <TbNumber12Small />
            </div>
            <input
              type="text"
              placeholder="PRN No."
              required
              name="prnno"
              className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
            />
          </div>
          <div className="relative">
            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
              <RiLockPasswordLine />
            </div>
            <input
              type="text"
              placeholder="Password"
              required
              name="password"
              className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
            />
          </div>

          <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2" type="submit">
            Login
          </button>
        </form>
        <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
          <p>
            Create a new Account.{" "}
            <Link
              to={"/register"}
              className="text-neon-blue font-semibold cursor-pointer"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
