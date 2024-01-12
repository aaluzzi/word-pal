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

    return (
        <Word word={word} />
    )
}