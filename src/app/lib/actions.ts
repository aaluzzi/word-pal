'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { fetchWords, saveWord, wordSaved } from "./data";

export async function getWords() {
    const session = await getServerSession(authOptions);
    if (session) {
        const words = await fetchWords(session.user.id);
        return words || [];
    }
    return [];
}

export async function submitWord(word: string) {
    const session = await getServerSession(authOptions);
    if (session) {
        saveWord(session?.user.id, word);
    }
}

export async function wordIsSaved(word: string) {
    const session = await getServerSession(authOptions);
    if (session) {
       return await wordSaved(session.user.id, word) || false;
    }
    return false;
}