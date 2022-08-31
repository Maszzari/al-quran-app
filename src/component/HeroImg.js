import React from "react";
// import heroImg from "../img/hero-img.png";
import bgHeroImg from "../img/bg-hero-img.jpg";

export default function HeroImg() {
	return (
		<section style={{backgroundImage: `url(${bgHeroImg})`}} className="w-full h-screen flex items-center bg-cover relative after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-stone-600">
			<div className="container">
				<div className="w-full text-center text-white relative z-10">
          <h1 className="text-5xl font-bold">My Al-Quran</h1>
          <p className="text-xl mt-3">Tempat membaca Al-Quran, lengkap denagan artinya</p>
				</div>
			</div>
		</section>
	);
}
