import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<div className=' w-screen bg-violet-100/15 flex gap-1 md:gap-5'>
			<Sidebar />
			{isLoading ? (
				<Loader />
			) : (
				<main className='max-w-5xl ml-0 md:ml-14 mx-auto flex-1'>
					<Outlet />
				</main>
			)}
		</div>
	);
};

export default HomeLayout;
