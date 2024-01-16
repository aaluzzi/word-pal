'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { fetchCategories, fetchWords, saveCategory, saveWord, wordSaved } from "./data";
import { revalidatePath } from "next/cache";

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

export async function getCategories() {
    const session = await getServerSession(authOptions);
    if (session) {
        const categories = await fetchCategories(session.user.id);
        if (categories) {
            return ['all', ...categories!!.map(category => category.category_name)];
        } else {
            return ['all'];
        }
    }
    return [];
}

export async function submitCategory(formData: FormData) {
    const session = await getServerSession(authOptions);
    if (session && formData.get('category_name')) {
        saveCategory(session.user.id, formData.get('category_name')!.toString());
        revalidatePath('/collection');
    }
}
