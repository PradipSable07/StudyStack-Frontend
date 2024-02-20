import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbNumber12Small } from "react-icons/tb";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <div> </div>
      <div className="bg-blue-600 max-w-80 grid gap-5">
        <h1 className="text-4xl font-bold text-white">Login</h1>

        <form action="" className="space-y-6 text-black">
          <div className="relative">
            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
              <TbNumber12Small />
            </div>
            <input
              type="text"
              placeholder="PRN No."
              required
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
              className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
            />
          </div>

          <button className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">
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
