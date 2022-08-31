import React, {useEffect, useState} from "react";
import Verse from "./verse";
import {useParams} from "react-router-dom";
import IsLoading from "./IsLoading";

export default function Verses() {
	const {number} = useParams();
	const [surah, setSurah] = useState([]);
	const [getVerses, setGetVerses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch(`https://quran-api-id.vercel.app/surahs/${number}`)
			.then((data) => data.json())
			.then((result) => {
				setSurah(result);
				setGetVerses(result.ayahs);
				setIsLoading(true)
			});
	}, [number]);

	return (
		<section className="w-full mt-20">
			{!isLoading && <IsLoading />}
			<div className="container">
				<h2 className="text-4xl font-bold text-center">{surah.name}</h2>
				<p className="text-xl text-center">
					{surah.translation} ( <span className="text-slate-500 italic">{surah.revelation}</span> )
				</p>
				<div className="w-full flex flex-wrap gap-5 justify-end mt-10">
					{getVerses.map((data) => (
						<Verse verse={data} key={data.number.inSurah} />
					))}
				</div>
			</div>
		</section>
	);
}
