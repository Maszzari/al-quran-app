import {RiBookOpenLine} from "react-icons/ri";
import {Link} from 'react-router-dom';

export default function SurahItem({surah}) {
	return (
		<div className="w-full p-3 border rounded shadow">
			<div className="w-full flex items-center text-stone-600">
				<div className="w-auto px-4">
					<p className="text-2xl font-semibold">{surah.number}</p>
				</div>
				<div className="grow">
					<h2 className="text-lg font-semibold">{surah.name}</h2>
					<p className="text-sm">{surah.numberOfAyahs} Ayat</p>
					<p className="text-xs text-slate-400">{surah.revelation}</p>
				</div>
				<div className="w-auto px-4">
					<Link to={`/surah/${surah.number}`}>
						<RiBookOpenLine className="text-2xl" />
					</Link>
				</div>
			</div>
		</div>
	);
}
