'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function WordLink({ word }: { word: string }) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const setWordParam = (word: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('word', word);
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<span className="text-sm px-3 py-1 rounded-full border-gray-300 border-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer" key={word} onClick={() => setWordParam(word)}>
			{word}
		</span>
	);
}
