import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../feature/userSlice";

const Landing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.userState.user);
	// const username = user.username;
	const handleLogout = () => {
		navigate("/login");
		dispatch(logoutUser({}));
	};

	return (
		<header className=' bg-secondary-content py-2 '>
			<div className='align-element flex justify-center sm:justify-end'>
				{user ? (
					<div className='flex gap-x-2 sm:gap-x-8 items-center'>
						<p className='text-xs sm:text-sm'>Namaste, {user.firstname}</p>
						<button
							className='bg-gradient-to-r from-blue-400 to-cyan-200 w-fit font-semibold rounded-full p-2'
							onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<div className='flex gap-x-6 justify-center items-center'>
						<Link to='/login' className='link link-hover text-xs sm:text-sm'>
							Sign In / Guest
						</Link>
						<Link to='/register' className='link link-hover text-xs sm:text-sm'>
							Create Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Landing;
