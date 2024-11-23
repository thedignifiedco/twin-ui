import { Toast } from "flowbite-react";
export default {
	title: "Components/Toasts",
	component: Toast
};

export const MessageCta = () => (
	<div
		id="toast-message-cta"
		className="w-full max-w-xs rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
		role="alert"
	>
		<div className="flex">
			<img
				className="h-8 w-8 rounded-full"
				src="/docs/images/people/profile-picture-1.jpg"
				alt="Jese Leos image"
			/>
			<div className="ms-3 text-sm font-normal">
				<span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
				<div className="mb-2 text-sm font-normal">
					Hi Neil, thanks for sharing your thoughts regarding Flowbite.
				</div>
				<a
					href="#"
					className="inline-flex rounded-lg bg-blue-600 px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
				>
					Reply
				</a>
			</div>
			<button
				type="button"
				className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
	</div>
);

export const Notification = () => (
	<div
		id="toast-notification"
		className="w-full max-w-xs rounded-lg bg-white p-4 text-gray-900 shadow dark:bg-gray-800 dark:text-gray-300"
		role="alert"
	>
		<div className="mb-3 flex items-center">
			<span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
				New notification
			</span>
			<button
				type="button"
				className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
		<div className="flex items-center">
			<div className="relative inline-block shrink-0">
				<img
					className="h-12 w-12 rounded-full"
					src="/docs/images/people/profile-picture-3.jpg"
					alt="Jese Leos image"
				/>
				<span className="absolute bottom-0 right-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
					<svg
						className="h-3 w-3 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 18"
					>
						<path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" />
					</svg>
				</span>
			</div>
			<div className="ms-3 text-sm font-normal">
				<div className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
				<div className="text-sm font-normal">commented on your photo</div>
				<span className="text-xs font-medium text-blue-600 dark:text-blue-500">
					a few seconds ago
				</span>
			</div>
		</div>
	</div>
);

export const Default = () => (
	<div
		id="toast-default"
		className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
		role="alert"
	>
		<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
			<svg
				className="h-4 w-4"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 18 20"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
				/>
			</svg>
			<span className="sr-only">Fire icon</span>
		</div>
		<div className="ms-3 text-sm font-normal">Set yourself free.</div>
		<button
			type="button"
			className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
			data-dismiss-target="#toast-default"
			aria-label="Close"
		>
			<span className="sr-only">Close</span>
			<svg
				className="h-3 w-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
				/>
			</svg>
		</button>
	</div>
);

export const DifferentColor = () => (
	<>
		<div
			id="toast-success"
			className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
			role="alert"
		>
			<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
				<svg
					className="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
				</svg>
				<span className="sr-only">Check icon</span>
			</div>
			<div className="ms-3 text-sm font-normal">Item moved successfully.</div>
			<button
				type="button"
				className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
				data-dismiss-target="#toast-success"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg
					className="h-3 w-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
		<div
			id="toast-danger"
			className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
			role="alert"
		>
			<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
				<svg
					className="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
				</svg>
				<span className="sr-only">Error icon</span>
			</div>
			<div className="ms-3 text-sm font-normal">Item has been deleted.</div>
			<button
				type="button"
				className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
				data-dismiss-target="#toast-danger"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg
					className="h-3 w-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
		<div
			id="toast-warning"
			className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
			role="alert"
		>
			<div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
				<svg
					className="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
				</svg>
				<span className="sr-only">Warning icon</span>
			</div>
			<div className="ms-3 text-sm font-normal">Improve password difficulty.</div>
			<button
				type="button"
				className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
				data-dismiss-target="#toast-warning"
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<svg
					className="h-3 w-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
	</>
);
