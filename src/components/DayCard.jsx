import React from "react";
import { Link } from "react-router-dom";
import videoSvg from "../assets/undraw_video_files_fu10.svg";
import { useSelector } from "react-redux";

export function DayCard({ _id, title, Description, section }) {
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);
	return (
		<Link
			to={`/${section}/${_id}`}
			className='bg-white w-full sm:w-24 sm:h-30 md:w-48 lg:w-64 h-24 md:h-36 lg:h-40 bg-opacity-30 shadow-lg backdrop-blur-lg border-opacity-20 border-white rounded-lg border-2 p-4 flex flex-col justify-center items-center'>
			<img
				src={videoSvg}
				alt={title}
				className='w-24 sm:w-24 md:w-32 lg:w-40 mb-2 sm:mb-4'
			/>
			<p className='text-center'>{title}</p>
		</Link>
	);
}
