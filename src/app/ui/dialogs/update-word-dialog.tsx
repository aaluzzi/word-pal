'use client';

import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import FormDialog from './form-dialog';
import { useState } from 'react';
import { changeWordCategory } from '@/app/lib/actions';
import { QueryResultRow } from '@vercel/postgres';

function CategoryInput({ current, categories }: { current: string; categories: string[] }) {
	const [selected, setSelected] = useState(current);

	return (
		<>
			<label htmlFor="categories" className="text-sm font-medium">
				Category
			</label>
			<Listbox value={selected} onChange={setSelected} name="category_name">
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 capitalize text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
						<span className="block truncate">{selected}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>
					<Listbox.Options className="absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
						{categories.map((category, categoryIdx) => (
							<Listbox.Option
								key={categoryIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 capitalize ${
										active ? 'bg-sky-100 text-blue-600' : 'text-gray-900'
									}`
								}
								value={category}
							>
								{({ selected }) => (
									<>
										<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{category}</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</>
	);
}

export default function UpdateWordDialog({
	isOpen,
	setIsOpen,
	word,
	categories,
}: {
	isOpen: boolean;
	setIsOpen: Function;
	word: QueryResultRow;
	categories: string[];
}) {
	const onFormSubmit = (formData: FormData) => {
		if (formData.get('category_name')) {
			changeWordCategory(word.word, formData.get('category_name')!.toString());
		}
	};

	return FormDialog({
		isOpen: isOpen,
		setIsOpen: setIsOpen,
		title: word?.word,
		formInputs: CategoryInput({ current: word?.category_name, categories: categories }),
		onFormSubmit: onFormSubmit,
	});
}
