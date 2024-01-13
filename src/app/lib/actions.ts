'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { saveWord, wordSaved } from "./data";

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