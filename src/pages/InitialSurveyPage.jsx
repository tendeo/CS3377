import React, { useState } from "react";
import { Wifi, Battery } from "lucide-react";

const DIETARY_OPTIONS = [
	"Vegetarian",
	"Vegan",
	"Gluten-Free",
	"Dairy-Free",
	"Nut-Free",
	"Keto",
	"Paleo",
	"Halal",
	"Pescatarian",
	"Kosher",
];
const CUISINE_OPTIONS = [
	"American",
	"Italian",
	"Chinese",
	"Mexican",
	"Japanese",
	"Indian",
	"Thai",
	"Mediterranean",
];

export function InitialSurveyPage() {
	const [step, setStep] = useState(1);
	const [selectedDietary, setSelectedDietary] = useState([]);
	const [selectedCuisines, setSelectedCuisines] = useState([]);

	const toggleOption = (option, selected, setSelected) => {
		setSelected(
			selected.includes(option)
				? selected.filter((o) => o !== option)
				: [...selected, option]
		);
	};

	return (
		<div className="h-full flex flex-col bg-white">
			{/* iOS Status Bar */}
			<div className="flex items-center justify-between px-6 pt-3 pb-2">
				<span className="text-[15px]">9:41</span>
				<div className="flex items-center gap-1">
					<Wifi className="h-4 w-4" strokeWidth={2.5} />
					<div className="flex gap-[2px]">
						<div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
						<div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
						<div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
						<div className="w-[3px] h-3 bg-foreground/40 rounded-sm"></div>
					</div>
					<Battery className="h-5 w-6 ml-1" strokeWidth={2} />
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 flex flex-col items-center justify-center px-6">
				<h1 className="mb-6 text-3xl font-medium">Initial Survey</h1>
				{step === 1 ? (
					<div className="w-full max-w-md">
						<h2 className="mb-4 text-lg font-semibold text-center">
							Dietary Restrictions
						</h2>
						<div className="flex flex-col gap-3 mb-8">
							{DIETARY_OPTIONS.map((option) => (
								<button
									key={option}
									onClick={() =>
										toggleOption(
											option,
											selectedDietary,
											setSelectedDietary
										)
									}
									className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors text-left ${
										selectedDietary.includes(option)
											? "bg-black text-white border-black font-bold"
											: "bg-white text-black border-gray-300"
									}`}
								>
									{option}
								</button>
							))}
						</div>
						<button
							onClick={() => setStep(2)}
							className="w-full bg-blue-600 text-white rounded-lg h-12 text-lg font-medium hover:bg-blue-700"
						>
							Next
						</button>
					</div>
				) : (
					<div className="w-full max-w-md">
						<h2 className="mb-4 text-lg font-semibold text-center">
							Taste Preferences
						</h2>
						<div className="flex flex-col gap-3 mb-8">
							{CUISINE_OPTIONS.map((option) => (
								<button
									key={option}
									onClick={() =>
										toggleOption(option, selectedCuisines, setSelectedCuisines)
									}
									className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors text-left ${
										selectedCuisines.includes(option)
											? "bg-black text-white border-black font-bold"
											: "bg-white text-black border-gray-300"
									}`}
								>
									{option}
								</button>
							))}
						</div>
						<button
							onClick={() => setStep(1)}
							className="w-full bg-gray-200 text-black rounded-lg h-12 text-lg font-medium mb-2 hover:bg-gray-300"
						>
							Back
						</button>
					</div>
				)}
			</div>

			{/* Bottom Section */}
			<div className="pb-6 px-6">
				{/* Home Indicator */}
				<div className="flex justify-center pt-2">
					<div className="w-32 h-1 bg-black/20 rounded-full"></div>
				</div>
			</div>
		</div>
	);
}
