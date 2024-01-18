'use client';

import { removeCategory, removeWord } from '@/app/lib/actions';
import FormDialog from './form-dialog';
import { QueryResultRow } from '@vercel/postgres';

function FormInput({ itemToDelete }: { itemToDelete: string }) {
	return (
		<div className="text-center py-4">
			Are you sure you want to delete <span className="font-bold">{itemToDelete}</span>?
		</div>
	);
}

export function DeleteCategoryDialog({
	isOpen,
	setIsOpen,
	category,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	category: string;
}) {
	return DeleteDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		itemToDelete: category,
		onFormSubmit: () => removeCategory(category),
	});
}

export function DeleteWordDialog({
	isOpen,
	setIsOpen,
	word,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	word: QueryResultRow;
}) {
	return DeleteDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		itemToDelete: word.word,
		onFormSubmit: () => removeWord(word.word),
	});
}

function DeleteDialog({
	isOpen,
	setIsOpen,
	itemToDelete,
	onFormSubmit,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	itemToDelete: string;
	onFormSubmit: (formData: FormData) => void;
}) {
	return FormDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		title: `Delete ${itemToDelete}`,
		formInputs: <FormInput itemToDelete={itemToDelete} />,
		onFormSubmit: onFormSubmit,
	});
}
