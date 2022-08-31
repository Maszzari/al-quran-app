import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Surah from "./pages/Surah";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/surah/:number" element={<Surah />} />
			<Route path="*" element={<h1>Anjay</h1>} />
		</Routes>
	);
}
