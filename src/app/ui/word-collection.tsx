'use client';

import { QueryResultRow } from '@vercel/postgres';
import CategoryDisplay from './category-display';
import UpdateWordDialog from './dialogs/update-word-dialog';
import { useState } from 'react';

export default function WordCollection({ words, categories }: { words: QueryResultRow[]; categories: string[] }) {
	const [updateWordDialogIsOpen, setUpdateWordDialogIsOpen] = useState(false);
	const [wordToUpdate, setWordToUpdate] = useState(words[0]);

	if (words.length === 0) {
		return (
			<div className="mt-6 rounded-lg p-4 bg-gray-50">
				No words saved. Star one to save it to your collection!
			</div>
		);
	}

	return (
		<div className="mt-6 rounded-lg p-4 bg-gray-50 space-y-2">
			{categories.map((category) => (
				<CategoryDisplay
					key={category}
					category={category}
					words={words.filter((word) => word.category_name === category)}
					setUpdateWordDialogIsOpen={setUpdateWordDialogIsOpen}
					setWordToUpdate={setWordToUpdate}
				/>
			))}

			<UpdateWordDialog
				categories={categories}
				isOpen={updateWordDialogIsOpen}
				setIsOpen={setUpdateWordDialogIsOpen}
				word={wordToUpdate}
			/>
		</div>
	);
}
