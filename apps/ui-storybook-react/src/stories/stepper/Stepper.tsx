import React from "react";

export const PersonalInfoSteps: React.FC = () => (
	<ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 sm:text-base dark:text-gray-400">
		<li className="after:border-1 flex items-center text-blue-600 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10 dark:text-blue-500 dark:after:border-gray-700">
			<span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden dark:after:text-gray-500">
				<svg
					className="me-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					aria-hidden="true"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
				</svg>
				Personal <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
			</span>
		</li>
		<li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] sm:after:inline-block md:w-full xl:after:mx-10 dark:after:border-gray-700">
			<span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden dark:after:text-gray-500">
				<span className="me-2">2</span>
				Account <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
			</span>
		</li>
		<li className="flex items-center">
			<span className="me-2">3</span>
			Confirmation
		</li>
	</ol>
);

export const IconsStepper: React.FC = () => (
	<ol className="flex w-full items-center">
		<li className="flex w-full items-center text-blue-600 after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-blue-100 after:content-[''] dark:text-blue-500 dark:after:border-blue-800">
			<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-800">
				<svg
					className="h-3.5 w-3.5 text-blue-600 lg:h-4 lg:w-4 dark:text-blue-300"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 12"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5.917 5.724 10.5 15 1.5"
					/>
				</svg>
			</span>
		</li>
		<li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-gray-100 after:content-[''] dark:after:border-gray-700">
			<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700">
				<svg
					className="h-4 w-4 text-gray-500 lg:h-5 lg:w-5 dark:text-gray-100"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 16"
				>
					<path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
				</svg>
			</span>
		</li>
		<li className="flex w-full items-center">
			<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700">
				<svg
					className="h-4 w-4 text-gray-500 lg:h-5 lg:w-5 dark:text-gray-100"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 20"
				>
					<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
				</svg>
			</span>
		</li>
	</ol>
);

export const WithSubHeading: React.FC = () => (
	<ol className="w-full items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
		<li className="flex items-center space-x-2.5 text-blue-600 rtl:space-x-reverse dark:text-blue-500">
			<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-600 dark:border-blue-500">
				1
			</span>
			<span>
				<h3 className="font-medium leading-tight">User info</h3>
				<p className="text-sm">Step details here</p>
			</span>
		</li>
		<li className="flex items-center space-x-2.5 text-gray-500 rtl:space-x-reverse dark:text-gray-400">
			<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
				2
			</span>
			<span>
				<h3 className="font-medium leading-tight">Company info</h3>
				<p className="text-sm">Step details here</p>
			</span>
		</li>
		<li className="flex items-center space-x-2.5 text-gray-500 rtl:space-x-reverse dark:text-gray-400">
			<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
				3
			</span>
			<span>
				<h3 className="font-medium leading-tight">Payment info</h3>
				<p className="text-sm">Step details here</p>
			</span>
		</li>
	</ol>
);

export const VerticalStepper: React.FC = () => (
	<ol className="w-72 space-y-4">
		<li>
			<div
				className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
				role="alert"
			>
				<div className="flex items-center justify-between">
					<span className="sr-only">User info</span>
					<h3 className="font-medium">1. User info</h3>
					<svg
						className="h-4 w-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 16 12"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5.917 5.724 10.5 15 1.5"
						/>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div
				className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-green-700 dark:border-green-800 dark:bg-gray-800 dark:text-green-400"
				role="alert"
			>
				<div className="flex items-center justify-between">
					<span className="sr-only">Account info</span>
					<h3 className="font-medium">2. Account info</h3>
					<svg
						className="h-4 w-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 16 12"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5.917 5.724 10.5 15 1.5"
						/>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div
				className="w-full rounded-lg border border-blue-300 bg-blue-100 p-4 text-blue-700 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
				role="alert"
			>
				<div className="flex items-center justify-between">
					<span className="sr-only">Social accounts</span>
					<h3 className="font-medium">3. Social accounts</h3>
					<svg
						className="h-4 w-4 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</div>
			</div>
		</li>
		<li>
			<div
				className="w-full rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
				role="alert"
			>
				<div className="flex items-center justify-between">
					<span className="sr-only">Review</span>
					<h3 className="font-medium">4. Review</h3>
				</div>
			</div>
		</li>
		<li>
			<div
				className="w-full rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
				role="alert"
			>
				<div className="flex items-center justify-between">
					<span className="sr-only">Confirmation</span>
					<h3 className="font-medium">5. Confirmation</h3>
				</div>
			</div>
		</li>
	</ol>
);
export const BreadcrumbStepper: React.FC = () => {
	return (
		<ol className="flex w-full items-center space-x-2 rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-sm sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
			<li className="flex items-center text-blue-600 dark:text-blue-500">
				<span className="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-600 text-xs dark:border-blue-500">
					1
				</span>
				Personal <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
				<svg
					className="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 12 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m7 9 4-4-4-4M1 9l4-4-4-4"
					/>
				</svg>
			</li>
			<li className="flex items-center">
				<span className="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
					2
				</span>
				Account <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
				<svg
					className="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 12 10"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m7 9 4-4-4-4M1 9l4-4-4-4"
					/>
				</svg>
			</li>
			<li className="flex items-center">
				<span className="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
					3
				</span>
				Review
			</li>
		</ol>
	);
};
