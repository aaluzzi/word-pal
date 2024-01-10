export async function fetchWord(query: String) {
    if (query) {
        const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query.toLowerCase()}`);
        const json = resp.json();
        return json;
    }
}