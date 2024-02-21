import { DayCard } from "./../components/DayCard";
import { customFetch } from "../utils";
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

			<div className='grid gap-4  grid-cols-1 md:grid-cols-3'>
				{sortedData.map((element) => {
					const { _id, day, title, Description } = element;
					return (
						<DayCard
							key={day}
							_id={_id}
							title={title}
							Description={Description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default CPP;
