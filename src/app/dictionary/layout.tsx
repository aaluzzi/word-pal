import Search from "../ui/search";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={`text-3xl`}>Dictionary</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Search word.." />
			</div>
			{children}
		</div>
	);
}
