'use server';

import { sql } from "@vercel/postgres";

export type Word = {
    word: string,
    meanings: Array<Meaning>,
};

type Meaning = {
    partOfSpeech: string,
    definitions: Array<Definition>,
    synonyms: Array<string>,
}

type Definition = {
    definition: string,
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

export async function createUser(userId: string, username: string, globalName: string) {
    try {
        await sql`
            INSERT INTO users (user_id, username, global_name)
            VALUES (${userId}, ${username}, ${globalName})
            ON CONFLICT DO NOTHING
        `;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchWords(userId: string) {
    try {
        const words = await sql`
            SELECT word
            FROM UserWords
            WHERE user_id = ${userId}
            AND category_name = 'all'
        `
        return words.rows;
    } catch (error) {
        console.error(error);
    }
}

export async function saveWord(userId: string, word: string) {
    try {
        sql`INSERT INTO UserWords (user_id, word, category_name) VALUES (${userId}, ${word}, 'all') ON CONFLICT DO NOTHING`;
    } catch (error) {
        console.error(error);
    }
}

export async function wordSaved(userId: string, word: string) {
    try {
        const count = await sql`
            SELECT COUNT(*) FROM UserWords
            WHERE user_id = ${userId} AND word = ${word};
        `;
        return count.rows[0].count > 0;
    } catch (error) {
        console.error(error);
    }
}