import React from "react";
import { Link } from "react-router-dom";
import videoSvg from "../assets/undraw_video_files_fu10.svg";
import { useSelector } from "react-redux";

export function DayCard({ _id, title, Description }) {
	const isSidebarOpen = useSelector((state) => state.userState.isSidebarOpen);
	return (
		<Link
			to={`/cpp/${_id}`}
			className={`bg-violet-100 hover:shadow-xl w-80 border-slate-300/45 border-2 p-4 flex flex-col justify-center items-center`}>
			<img src={videoSvg} alt={title} className='w-36 h-36' />

			<p>{title}</p>
		</Link>
	);
}
