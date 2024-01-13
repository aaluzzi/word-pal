import { wordIsSaved } from "@/app/lib/actions";
import { fetchWord } from "@/app/lib/data";
import Word from "@/app/ui/word";

export default async function Page({ params }: {params: { word: string}}) {
    const word = await fetchWord(params.word);

	if (!word) {
		return (
			<div className="mt-6 flow-root">
				<h1>Word Not Found</h1>
			</div>
		);
	}

	//TODO some kind of caching so we don't waste our precious FREE db resources
	const alreadySaved = await wordIsSaved(word.word);

    return (
        <Word word={word} alreadySaved={alreadySaved} />
    )
}