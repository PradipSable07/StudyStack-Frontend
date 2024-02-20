import { customFetch } from "@/utils";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
const url = "/cpp";
export const loader = async () => {
	const response = await customFetch(url);
	const data = response?.data;
	return { data };
};
const CPP = () => {
	const { data } = useLoaderData();
	const [sortedData, setSortedData] = useState([]);
	useEffect(() => {
		if (data) {
			const sorted = [...data].sort((a, b) => a.day - b.day);
			setSortedData(sorted);
		}
	}, [data]);
	return (
		<section className='mx-auto'>
			<h1 className='text-3xl font-bold my-10 '>CPP</h1>

			<div className='flex flex-cols-2 md:flex-cols-3 lg:flex-cols-4 gap-4 mt-12'>
				{sortedData.map((element) => {
					const { _id, day, title, Description } = element;
					return (
						<Link
							to={`/cpp/${_id}`}
							key={day}
							className='bg-[#33323893] border border-white/[0.08] w-32 rounded-lg p-8 relative overflow-hidden'>
							<img
								src=' https://cdn-icons-png.flaticon.com/512/126/126473.png '
								alt=''
							/>
							<p>{title}</p>
							<p>{Description}</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default CPP;
