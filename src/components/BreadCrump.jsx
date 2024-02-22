import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
const BreadCrumb = () => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<nav aria-label='breadcrumb'>
			<ol className='mt-4 flex capitalize gap-1 '>
				<li className='breadcrumb-item '>
					<Link
						to='/dashboard'
						className='flex justify-center items-center gap-2'>
						dashboard <GoChevronRight />
					</Link>
				</li>
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
					const isLast = index === pathnames.length - 1;

					return (
						<li
							key={name}
							className={`breadcrumb-item ${isLast ? "active" : ""}`}
							aria-current={isLast ? "page" : ""}>
							{isLast ? null : (
								<Link to={routeTo}> {name}</Link> // Link for other pages
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default BreadCrumb;
