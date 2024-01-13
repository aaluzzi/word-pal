'use client';

import { Word } from '../lib/data';
import WordLink from './word-link';
import FavoriteButton from './favorite-button';
import { submitWord } from '../lib/actions';
import { useState } from 'react';

export default function Word({ word, alreadySaved }: { word: Word , alreadySaved: boolean}) {
	const [saved, setSaved] = useState(alreadySaved);
	const submit = async () => {
		submitWord(word.word);
		setSaved(true);
	};

	return (
		<div className="mt-6 flex flex-col rounded-lg p-4 bg-gray-50 gap-4">
			<div className="flex items-center gap-2">
				<h1 className="text-4xl font-bold">{word.word}</h1>
				<FavoriteButton submitWord={submit} saved={saved} />
			</div>

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
