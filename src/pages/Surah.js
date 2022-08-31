import React from "react";
import Header from "../component/Header";
import HomeBtn from "../component/HomeBtn";
import Verses from "../component/Verses";

export default function Surah() {
	return (
		<>
			<Header />
			<main>
				<Verses />
				<HomeBtn />
			</main>
		</>
	);
}
