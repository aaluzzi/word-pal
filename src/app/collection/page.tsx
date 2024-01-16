import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getCategories, getWords } from '../lib/actions';
import CreateCategoryButtonAndDialog from '../ui/create-cat-button-dialog';
import WordCollection from '../ui/word-collection';

export default async function Page() {
	const session = await getServerSession();
	if (!session) {
		redirect('/api/auth/signin');
	}

	const words = await getWords();
	const categories = await getCategories();
	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={`text-3xl`}>My Collection</h1>
				<CreateCategoryButtonAndDialog />
			</div>
            <WordCollection words={words} categories={categories}></WordCollection>
		</div>
	);
}
