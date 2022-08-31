import React from "react";
import {numberToArabic} from "number-to-arabic";

export default function Verse({verse}) {
	return (
		<div className="w-[95%] ml-auto flex p-3 rounded border-2 relative">
			<div className="border-2 border-stone-600 w-7 h-7 flex items-center justify-center rounded-full absolute -top-3 -left-3 bg-white">
				<p>{verse.number.inSurah}</p>
			</div>
			<div className="w-full">
				<h4 className="text-2xl lg:text-3xl text-right leading-loose md:leading-loose lg:leading-loose xl:leading-loose font-lpmq">
					{verse.arab} {numberToArabic(verse.number.inSurah)}
				</h4>
				<p className="mt-3">{verse.translation}</p>
			</div>
		</div>
	);
}
