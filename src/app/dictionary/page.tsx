import Word from "../ui/word";
import Search from "../ui/search";

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
    };
  }) {
    const query = searchParams?.query || '';
  
    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`text-2xl`}>Dictionary</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search word.." />
        </div>
        <Word query={query} />
      </div>
    );
  }