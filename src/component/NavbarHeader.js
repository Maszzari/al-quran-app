import React from "react";
import {BsQuestion} from "react-icons/bs";

export default function NavbarHeader() {
	return (
		<nav>
			<ul className="flex">
				<li>
					<a href="/tentang" className="flex items-center">
						<BsQuestion />
						<p className="hidden md:block">Tentang</p>
					</a>
				</li>
			</ul>
		</nav>
	);
}
