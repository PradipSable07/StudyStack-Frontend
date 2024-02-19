import Sidebar from "@/components/Sidebar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
	return (
		<div className=' flex gap-5'>
			<Sidebar />
			<main className='max-w-5xl mx-auto flex-1 py-4 '>
				<Outlet />
			</main>
		</div>
	);
};

export default HomeLayout;
