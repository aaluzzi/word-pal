'use client';

import { useRouter } from 'next/navigation';

export default function WordLink({ word }: { word: string }) {
	const { push } = useRouter();

	return (
		<div
			className="text-sm px-3 py-1 rounded-full border-gray-300 border-2 hover:bg-sky-100 hover:text-blue-600 cursor-pointer"
			key={word}
			onClick={() => push(`/dictionary/${word}`)}
		>
			{word}
		</div>
	);
}
