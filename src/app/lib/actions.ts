'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { fetchCategories, fetchWords, saveCategory, saveWord, updateWordCategory, wordSaved } from "./data";
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
        await saveWord(session?.user.id, word);
        revalidatePath('/collection');
    }
}

export async function wordIsSaved(word: string) {
    const session = await getServerSession(authOptions);
    if (session) {
       return await wordSaved(session.user.id, word) || false;
    }
    return false;
}

export async function getCategories() : Promise<string[]> {
    const session = await getServerSession(authOptions);
    if (session) {
        const categories = await fetchCategories(session.user.id);
        if (categories) {
            return ['uncategorized', ...categories!!.map(category => category.category_name)];
        } else {
            return ['uncategorized'];
        }
    }
    return [];
}

export async function submitCategory(formData: FormData) {
    const session = await getServerSession(authOptions);
    if (session && formData.get('category_name')) {
        await saveCategory(session.user.id, formData.get('category_name')!.toString());
        revalidatePath('/collection');
    }
}

export async function changeWordCategory(word: string, category: string) {
    const session = await getServerSession(authOptions);
    if (session) {
        await updateWordCategory(session.user.id, word, category);
        revalidatePath('/collection');
    }
}
