import BreadCrumb from "@/components/BreadCrump";
import { SectionTitle } from "@/components/SectionTitle";
import { menuItem } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<section className='mx-auto w-[80%] h-screen pt-10'>
			<SectionTitle title='Dashboard' />

			<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-10 h-96 overflow-y-scroll snap-both scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent '>
				{menuItem.map((item) => {
					const { path, name, icon } = item;
					if (path === "/dashboard") return null;
					return (
						<Link
							to={path}
							key={name}
							className={`bg-white w-full sm:w-24 sm:h-30 md:w-48 lg:w-64 h-24 md:h-36 lg:h-40 bg-opacity-30 shadow-lg backdrop-blur-lg border-opacity-20 border-white rounded-lg border-2 p-4 flex flex-col justify-center items-center`}>
							{icon} {name}
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Dashboard;
