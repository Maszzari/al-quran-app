import React, {useState, useEffect} from "react";
import NavbarHeader from "./NavbarHeader";

export default function Header() {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const onWindowScroll = () => setScroll(window.scrollY);
		window.addEventListener("scroll", onWindowScroll);
		return () => window.removeEventListener("scroll", onWindowScroll);
	}, [scroll]);

	return (
		<header className={`py-3 w-full fixed top-0 z-20 bg-white ${scroll > 0 ? "shadow-md" : "shadow-none"}`}>
			<div className="container">
				<div className="w-full flex flex-wrap justify-between items-center">
					<h2 className="font-semibold text-stone-600">My Al - Quran</h2>
					<NavbarHeader />
				</div>
			</div>
		</header>
	);
}
