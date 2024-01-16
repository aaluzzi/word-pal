'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

export default function CategoryDisplay({
	category,
	words,
	setUpdateWordDialogIsOpen,
	setWordToUpdate,
}: {
	category: string;
	words: any[];
	setUpdateWordDialogIsOpen: Function;
	setWordToUpdate: Function;
}) {
	//TODO change any type
	const openWordDialog = (word: any) => {
		setWordToUpdate(word);
		setUpdateWordDialogIsOpen(true);
	};

	return (
		<Disclosure defaultOpen={category === 'uncategorized'}>
			{({ open }) => (
				<>
					<Disclosure.Button
						className={clsx(
							'mt-1 flex w-full items-center justify-between rounded-lg px-4 py-2 font-semibold hover:text-blue-600 hover:bg-sky-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75',
							{
								'bg-sky-100 text-blue-600': open,
								'bg-gray-100': !open,
							}
						)}
					>
						<span className="capitalize">{category}</span>
						<ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`} />
					</Disclosure.Button>
					<Disclosure.Panel className="bg-white">
						{words.map((word) => (
							<div className="flex px-3 py-2 justify-between items-center" key={word.word}>
								<Link href={`/dictionary/${word.word}`} className="flex-grow rounded-md hover:text-blue-600">
									{word.word}
								</Link>
								<PencilIcon
									className="h-6 text-gray-700 hover:text-blue-600"
									onClick={() => openWordDialog(word)}
								></PencilIcon>
							</div>
						))}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
