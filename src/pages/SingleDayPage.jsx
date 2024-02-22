import BreadCrumb from "@/components/BreadCrump";
import { SectionTitle } from "@/components/SectionTitle";
import { customFetch } from "@/utils";
import React from "react";
import { useLoaderData } from "react-router-dom";
import YouTube from "react-youtube";

export const loader = async ({ params }) => {
	console.log(params);
	const response = await customFetch(`${params.section}/${params.id}`);
	const data = response?.data;
	return { data };
};

const SingleDayPage = () => {
	const { data } = useLoaderData();
	const { Description, title, videoLink } = data;
	// console.log(videoLink);
	const regExp =
		/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = videoLink.match(regExp);
	const contentAfterLive = match ? match[1] : null;

	const calculateHeight = () => {
		const screenWidth = window.innerWidth;
		// You can adjust these values according to your layout and design requirements
		if (screenWidth < 640) {
			return 350; // Adjust the height for small screens
		} else if (screenWidth < 768) {
			return 125; // Adjust the height for medium screens
		} else {
			return 460; // Default height for larger screens
		}
	};

	const opts = {
		height: calculateHeight(), // Set dynamic height based on screen width
		width: "100%", // Set the width to 100% of the container
		playerVars: {
			autoplay: 1,
			controls: 1,
			disablekb: 0,
			modestbranding: 1,
			showinfo: 0,
			rel: 0,
		},
	};
	const onReady = (event) => {
		console.log("Player is ready:", event.target);
		// Optionally focus the player for keyboard accessibility
		event.target.getIframe().focus();
	};
	return (
		<section className='mx-auto h-screen'>
			<SectionTitle title={title} />
			<BreadCrumb />
			<div tabIndex='0' className='w-full mt-5 aspect-w-16 aspect-h-9 '>
				<YouTube videoId={contentAfterLive} opts={opts} onReady={onReady} />
			</div>
			<p className='mt-7 font-mono font-bold'>{Description}</p>
		</section>
	);
};

export default SingleDayPage;
