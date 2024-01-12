import { Word } from '../lib/data';
import WordLink from './word-link';

export default function Word({ word }: { word: Word }) {
	return (
		<div className="mt-6 flex flex-col rounded-lg p-4 bg-gray-50 gap-4">
			<h1 className="text-4xl font-bold">{word.word}</h1>

			{word.meanings.map((meaning, index) => (
				<div className="bg-white rounded-lg p-3" key={`${meaning.partOfSpeech}${index}`}>
					<div className="italic">{meaning.partOfSpeech}</div>
					<div className="pl-10">
						<ol className="list-decimal">
							{meaning.definitions.slice(0, 10).map((definition, index) => (
								<li className="py-1" key={`${meaning.partOfSpeech}${index}`}>
									<div>{definition.definition}</div>
									{definition.example && <div className="italic">{definition.example}</div>}
								</li>
							))}
						</ol>
						{meaning.synonyms.length > 0 &&
							<div className="flex flex-wrap items-center gap-1">
								<span className="text-blue-500">Similar:</span>
								{meaning.synonyms.map(synonym => <WordLink key={synonym} word={synonym} />)}
							</div>
						}
						
					</div>
				</div>
			))}
		</div>
	);
}
