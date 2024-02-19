import React from "react";
import { menuItem } from "../utils";
import { Link } from "react-router-dom";

const NavLinks = () => {
	return (
		<>
			{menuItem.map((item, index) => {
				const { path, name, icon } = item;
				return (
					<li key={index} className='nav-item p-1 text-wrap'>
						<Link
							to={path}
							className='link flex justify-start items-center gap-3'>
							<span className='min-w-max p-1'>{icon}</span>
							<span> {name}</span>
						</Link>
					</li>
				);
			})}
		</>
	);
};

export default NavLinks;
