import React from "react";
import {BsQuestion} from "react-icons/bs";
import {Link} from "react-router-dom";

export default function NavbarHeader() {
	return (
		<nav>
			<ul className="flex">
				<li>
					<Link to="/tentang" className="flex items-center">
						<BsQuestion />
						<p className="hidden md:block">Tentang</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
