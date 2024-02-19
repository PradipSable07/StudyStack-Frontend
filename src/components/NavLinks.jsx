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
						className='nav-item p-1 text-wrap hover:link hover:text-violet-500 '>
						<Link
							to={path}
							className='link flex justify-start items-center gap-3'>
							<span className='min-w-max p-1'>{icon}</span>
							{isSidebarOpen && <span>{name}</span>}
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
