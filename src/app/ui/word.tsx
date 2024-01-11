import { fetchWord } from '../lib/data';

export default async function Word({ query }: { query: string }) {
	const word = await fetchWord(query);

	if (!word) {
		return (
			<div className="mt-6 flow-root">
				<h1>Word Not Found</h1>
			</div>
		);
	}

	return (
		<div className="mt-6 flex flex-col rounded-lg p-4 bg-gray-50 gap-4">
			<h1 className="text-4xl font-bold">{word.word}</h1>

			{word.meanings.map(meaning => (
				<div className="bg-white rounded-lg p-3" key={meaning.partOfSpeech}>
					<div className="italic">{meaning.partOfSpeech}</div>
					<ol className="list-decimal pl-10">
						{meaning.definitions.slice(0, 10).map((definition, index) => (
							<li className="py-1" key={`${meaning.partOfSpeech}${index}`}>
								<div>{definition.definition}</div>
								{definition.example && <div className="italic">{definition.example}</div>}
							</li>
						))}
					</ol>
				</div>
			))}
	
		</div>
	);
}
