import React from "react";
import { menuItem } from "../utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLinks = () => {
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);

	return (
		<>
			{menuItem.map((item, index) => {
				const { path, name, icon } = item;
				return (
					<li
						key={index}
						className={`nav-item p-2 text-wrap hover:bg-slate-500 ${
							isSidebarOpen ? "hover:rounded-sm" : "hover:rounded-full"
						} hover:text-white gap-4`}>
						<Link
							to={path}
							className={`link flex ${
								isSidebarOpen ? "justify-start" : "justify-center"
							} items-center gap-3`}>
							<span className='min-w-max '>{icon}</span>
							{isSidebarOpen && <span>{name}</span>}
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
