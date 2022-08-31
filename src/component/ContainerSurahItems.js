import SurahItem from "./SurahItem";
import {RiSearch2Line} from "react-icons/ri";
import {useEffect, useState} from "react";
import IsLoading from "./IsLoading";

export default function ContainerSurahItmes() {
	// api surah
	const [surah, setSurah] = useState([]);
	useEffect(() => {
		fetch("https://quran-api-id.vercel.app/surahs/")
			.then((data) => data.json())
			.then((result) => {setSurah(result)
				setIsLoading(true)
			});
	}, []);

	// search
	const [searchedSurah, setSearchedSurah] = useState([]);

	const findSurah = (value) => {
		const surahTarget = surah.filter((data) =>
			data.name
				.replace(/[-\s']/g, "")
				.toLowerCase()
				.includes(value.toLowerCase().replace(/[-\s']/g, ""))
		);
		setSearchedSurah(surahTarget);
	};

	// isloading
	const [isLoading, setIsLoading] = useState(false)

	return (
		<section className="w-full py-5">
			{!isLoading && <IsLoading />}
			<div className="container">
				<form action="" className="w-full">
					<div className="w-full flex rounded overflow-hidden">
						<input type="text" name="search" className="border w-full px-5" placeholder="Cari surah ..." onChange={(e) => findSurah(e.target.value)} />
						<button className="px-5 py-3 text-white bg-blue-700">
							<RiSearch2Line />
						</button>
					</div>
				</form>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">{searchedSurah <= 0 ? surah.map((data) => <SurahItem surah={data} key={data.number} />) : searchedSurah.map((data) => <SurahItem surah={data} key={data.number} />)}</div>
			</div>
		</section>
	);
}
