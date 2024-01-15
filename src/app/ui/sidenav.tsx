'use client';

import NavLinks from '@/app/ui/nav-links';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOut, useSession } from 'next-auth/react';

export default function SideNav() {
	const { data: session } = useSession();

	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2 ">
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow rounded-md  md:block"></div>
				{session && session.user && (
					<button
						onClick={() => signOut()}
						className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
					>
						<ArrowRightStartOnRectangleIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</button>
				)}
			</div>
		</div>
	);
}
