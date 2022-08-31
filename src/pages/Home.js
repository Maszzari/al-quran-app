import React from "react";
import ContainerSurahItmes from "../component/ContainerSurahItems";
import Header from "../component/Header";
import HeroImg from "../component/HeroImg";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroImg />
				<ContainerSurahItmes />
			</main>
		</>
	);
}
