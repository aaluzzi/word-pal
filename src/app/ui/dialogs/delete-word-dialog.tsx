'use client';

import { removeWord } from '@/app/lib/actions';
import FormDialog from './form-dialog';
import { QueryResultRow } from '@vercel/postgres';

function FormInput({ word }: { word: string }) {
	return (
        <div className="text-center py-4">Are you sure you want to delete <span className="font-bold">{word}</span>?</div>
	);
}

export default function DeleteWordDialog({
	isOpen,
	setIsOpen,
	word,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	word: QueryResultRow;
}) {
	return FormDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		title: `Delete ${word?.word}`,
		formInputs: <FormInput word={word.word} />,
		onFormSubmit: () => removeWord(word.word),
	});
}
