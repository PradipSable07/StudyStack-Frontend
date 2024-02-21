import React, { useState } from "react";
import { PiSidebarSimpleFill, PiSidebarSimpleDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { toggleSidebar } from "@/feature/userSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userState.user);
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);

	const sidebar_motion = {
		open: {
			width: "16rem",
			transition: {
				damping: 50,
			},
		},
		closed: {
			width: "5rem",
			transition: {
				damping: 50,
			},
		},
	};

	return (
		<aside>
			<motion.div
				variants={sidebar_motion}
				animate={isSidebarOpen ? "open" : "closed"}
				className='bg-violet-200/25 shadow-xl border-slate-300 border-r  w-[16rem] max-w-[16rem] h-screen md:relative fixed '>
				<div
					onClick={() => dispatch(toggleSidebar(!isSidebarOpen))}
					className='absolute right-1 top-1 cursor-pointer  transition-[5s]'>
					{isSidebarOpen ? (
						<PiSidebarSimpleDuotone className='text-3xl' />
					) : (
						<PiSidebarSimpleFill className='text-3xl rotate-180' />
					)}
				</div>

				{/* User Profile */}
				<Link to={"/about"}>
					{" "}
					<div className='flex items-center flex-col gap-3 font-medium border-b border-slate-300 py-2 '>
						<img
							src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
							alt='..'
							className={` rounded-full ${
								isSidebarOpen ? "w-16 h-16" : "w-8 h-8 mt-8"
							}`}
						/>
						{isSidebarOpen && (
							<span className='text-2xl whitespace-pre'>
								{user.firstname} {user.lastname}
							</span>
						)}
					</div>
				</Link>

				<div className='flex flex-col'>
					<ul className='whitespace-pre px-3 text-[0.9rem] py-2 flex flex-col gap-5 font-medium overflow-x-hidden'>
						<NavLinks />
					</ul>
				</div>
			</motion.div>
		</aside>
	);
};

export default Sidebar;
