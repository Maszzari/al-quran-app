import React from "react";
import ContainerSurahItmes from "../component/ContainerSurahItems";
import Header from "../component/Header";
import HeroImg from "../component/HeroImg";
import {Helmet} from "react-helmet-async";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>My Al - quran</title>
				<meta name="description" content="Tempat memebaca Al - quran oneline, lengakap dengan artinya" />
				<link rel='canonical' href={window.location.href} />
				<meta property="og:title" content="My Al -quran" />
			</Helmet>
			<Header />
			<main>
				<HeroImg />
				<ContainerSurahItmes />
			</main>
		</>
	);
}
