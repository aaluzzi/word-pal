import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

export default function FormDialog({
	isOpen,
	setIsOpen,
	title,
	formInputs,
	onFormSubmit,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	title: string;
	formInputs: ReactNode;
	onFormSubmit: (formData: FormData) => void;
}) {
    return (
		<Dialog
			as="div"
			className="inset-0 bottom-[48px] flex justify-center absolute top-[64px] z-2 md:items-center md:ml-48"
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<Dialog.Panel className="w-full md:max-w-md flex flex-col rounded-2xl bg-gray-50 m-4 md:shadow-lg">
				<div className="bg-gray-50 shadow-lg rounded-2xl">
					<Dialog.Title className="flex justify-between text-xl font-medium bg-blue-600 text-white capitalize p-4">
						<span>{title}</span>
						<XMarkIcon className="h-7" onClick={() => setIsOpen(false)} />
					</Dialog.Title>
					<form onSubmit={() => setIsOpen(false)} action={onFormSubmit} className="p-6">
						{formInputs}
						<div className="flex justify-center gap-6 pt-8">
							<button
								onClick={() => setIsOpen(false)}
								className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Confirm
							</button>
						</div>
					</form>
				</div>
			</Dialog.Panel>
		</Dialog>
	);

}
