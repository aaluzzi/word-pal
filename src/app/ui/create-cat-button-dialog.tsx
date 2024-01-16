'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import CreateCategoryDialog from './create-category-dialog';

export default function CreateCategoryButtonAndDialog() {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white  hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
			>
				<span className="hidden md:block">Create Category</span>
				<PlusIcon className="h-5 md:ml-3" />
			</button>

			<CreateCategoryDialog isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
