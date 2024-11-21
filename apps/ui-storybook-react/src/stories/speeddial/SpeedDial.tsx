import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

interface SpeedDialProps {
	options: {
		icon: React.ReactNode;
		label: string;
	}[];
	textPosition?: "top" | "left";
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ options, textPosition = "top" }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDial = () => setIsOpen(!isOpen);

	return (
		<div className="relative flex flex-col">
			<button
				type="button"
				onClick={toggleDial}
				className="flex h-12 w-12 justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none"
			>
				<HiPlus className="text-2xl" />
			</button>
			{isOpen && (
				<div className="absolute mt-4 flex flex-col space-y-2">
					{options.map((option, index) => (
						<div
							key={index}
							className={`flex w-4/5 items-center justify-between ${
								textPosition === "top" ? "flex-col-reverse" : "flex-row-reverse"
							} gap-2`}
						>
							<span
								className="rounded-md px-2 py-1 text-sm text-gray-600 transition-opacity group-hover:opacity-100"
								style={{ whiteSpace: "nowrap" }}
							>
								{option.label}
							</span>
							<button
								type="button"
								className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-md hover:bg-gray-300"
								title={option.label}
							>
								{option.icon}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
