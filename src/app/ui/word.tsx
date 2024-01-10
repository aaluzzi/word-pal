import { fetchWord } from '../lib/data';

export default async function Word({ query }: { query: string }) {
	const word = await fetchWord(query);

	return (
		<div className="mt-6 flow-root">
			<h1>{word.word}</h1>
			<div className="inline-block min-w-full align-middle">{JSON.stringify(word)}</div>
		</div>
	);
}
