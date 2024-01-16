import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getCategories, getWords } from '../lib/actions';
import CategoryDisplay from '../ui/category-display';
import CreateCategoryButtonAndDialog from '../ui/create-cat-button-dialog';

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
			<div className="mt-6 rounded-lg p-4 bg-gray-50">
				{categories.map((category) => (
					<CategoryDisplay
						key={category}
						category={category}
						words={words.filter((word) => word.category_name === category)}
					/>
				))}
			</div>
		</div>
	);
}
