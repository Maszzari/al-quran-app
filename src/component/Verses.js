import React, {useEffect, useState} from "react";
import Verse from "./verse";
import {useParams} from "react-router-dom";
import IsLoading from "./IsLoading";
import {Helmet} from "react-helmet-async";

export default function Verses() {
	const {number} = useParams();
	const [surah, setSurah] = useState([]);
	const [getVerses, setGetVerses] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState('')

	useEffect(() => {
		fetch(`https://quran-api-id.vercel.app/surahs/${number}`)
			.then((data) => data.json())
			.then((result) => {
				setSurah(result);
				setGetVerses(result.ayahs);
				setIsLoading(true);
				setTitle(result.name)
			});
	}, [number]);

	
	return (
		<section className="w-full mt-20">
			<Helmet>
				<title>My Al - quran | {title}</title>
				<meta name="description" content={`Surat ${surah.name} (${surah.translation}) yang diturunkan di ${surah.revelation === 'Makkiyah' && 'Mekah'} dan terdiri dari ${surah.numberOfAyahs} ayat`} />
				<link rel='canonical' href={window.location.href} />
				<meta property="og:title" content="My Al -quran" />
			</Helmet>
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
