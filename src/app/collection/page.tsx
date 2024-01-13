import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getWords } from "../lib/actions";
import WordLink from "../ui/word-link";

export default async function Page() {
    const session = await getServerSession();
    if (!session) {
        redirect('/api/auth/signin');
    }

    const words = await getWords();
    return (
        <div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={`text-2xl`}>My Collection</h1>
			</div>
            <div className="mt-6 rounded-lg p-4 bg-gray-50">
                {words.map(word => <WordLink key={word} word={word} />)}
            </div>
		</div>
    );
}