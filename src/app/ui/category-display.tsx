'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import clsx from 'clsx';

export default function CategoryDisplay({ category, words }: { category: string; words: any[] }) {
	return (
		<Disclosure defaultOpen={category === 'all'}>
			{({ open }) => (
				<>
					<Disclosure.Button className={clsx("mt-1 flex w-full items-center justify-between rounded-lg px-4 py-2 font-semibold hover:text-blue-600 hover:bg-sky-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75",
                        {
                            'bg-sky-100 text-blue-600' : open,
                            'bg-gray-100' : !open,
                        })}>
						<span className="capitalize">{category}</span>
						<ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-blue-500`} />
					</Disclosure.Button>
					<Disclosure.Panel className="bg-white">
						{words.map((word) => (
                            <Link
                                key={word.word}
                                href={`/dictionary/${word.word}`}
                                className="block px-3 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600">
                                {word.word}
                            </Link>
						))}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
