import { SiAzuredevops, SiSpringboot, SiDotnet } from "react-icons/si";
import { FaNodeJs, FaDatabase, FaThList } from "react-icons/fa";

import { FaJava } from "react-icons/fa";

export const menuItem = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: <FaThList className='min-w-max text-3xl' />,
	},

	{
		path: "/cpp",
		name: "CPP",
		icon: <FaJava className='min-w-max text-3xl' />,
	},
	{
		path: "/core-java",
		name: "JAVA",
		icon: <FaJava className='min-w-max text-3xl' />,
	},
	{
		path: "/wpt",
		name: "Web programming",
		icon: <FaNodeJs className='min-w-max text-3xl' />,
	},
	{
		path: "/database",
		name: "Database",
		icon: <FaDatabase className='min-w-max text-3xl' />,
	},
	{
		path: "/advance-java",
		name: "Advance Java",
		icon: <SiSpringboot className='min-w-max text-3xl' />,
	},
	{
		path: "/dsa",
		name: "Data Structure and Algorithem",
		icon: <FaJava className='min-w-max text-3xl' />,
	},
	{
		path: "/sda",
		name: "SDM",
		icon: <SiAzuredevops className='min-w-max text-3xl' />,
	},
	{
		path: "/dotnet",
		name: "DotNet",
		icon: <SiDotnet className='min-w-max text-3xl' />,
	},
];
