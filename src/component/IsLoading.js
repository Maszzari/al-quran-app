import React from "react";

export default function IsLoading() {
	return (
		<div className="fixed z-10 top-0 right-0 bottom-0 left-0 bg-white flex items-center justify-center">
			<div className="w-24 h-24 bg-white rounded-full flex justify-center items-center relative overflow-hidden">
				<div className="w-16 h-16 rounded-full bg-white relative z-10"></div>
				<div className="w-full h-1/2 absolute bg-stone-600 animate-spin"></div>
			</div>
		</div>
	);
}
