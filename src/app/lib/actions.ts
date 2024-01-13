'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { saveWord } from "./data";

export async function submitWord(word: string) {
    const session = await getServerSession(authOptions);
    if (session) {
        saveWord(session?.user.id, word);
    }
}