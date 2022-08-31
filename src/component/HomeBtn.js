import React from "react";
import {RiHome4Line} from "react-icons/ri";
import {Link} from "react-router-dom";

export default function HomeBtn() {
	return (
		<div className="w-[50px] h-[50px] bg-blue-500 fixed bottom-10 left-2 rounded-full flex justify-center items-center text-white text-4xl">
			<Link to={"/"}>
				<RiHome4Line />
			</Link>
		</div>
	);
}
