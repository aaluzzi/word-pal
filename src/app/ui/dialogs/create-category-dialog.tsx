'use client';

import { submitCategory } from '../../lib/actions';
import FormDialog from './form-dialog';

function CategoryInput() {
	return (
		<>
			<label htmlFor="category_name" className="text-sm font-medium">
				Category name
			</label>
			<input
				required
				id="category_name"
				name="category_name"
				type="text"
				minLength={1}
				maxLength={32}
				placeholder="Enter category name"
				className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 outline-2 placeholder:text-gray-500"
			/>
		</>
	);
}

export default function CreateCategoryDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Function }) {
	return FormDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		title: 'New Category',
		formInputs: CategoryInput(),
		onFormSubmit: submitCategory,
	});
}
