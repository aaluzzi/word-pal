export type Word = {
    word: string,
    meanings: Array<Meaning>,
};

type Meaning = {
    partOfSpeech: string,
    definitions: Array<Definition>,
}

type Definition = {
    definition: string,
    synonyms: Array<string>,
    example: string,
}

export async function fetchWord(query: string): Promise<Word | null> {
    if (query) {
        const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query.toLowerCase()}`);
        const json = await resp.json();
        if (json.message) {
            return null;
        }
        const parsedWord: Word = json[0];
        return parsedWord;
    }
    return null;
}