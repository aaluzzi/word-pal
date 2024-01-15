'use client';

import { Menu } from '@headlessui/react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function AccountDropdown() {
	const session = useSession();

	return (
		<Menu as="div" className="h-[32px] w-[32px]">
			<Menu.Button>
				{session.data ? (
					<Image className="rounded-full" src={session.data?.user.image} width="32" height="32" alt="Avatar" />
				) : (
					<UserCircleIcon className="text-white h-[32px] w-[32px]" />
				)}
			</Menu.Button>
			<Menu.Items className="absolute top-12 right-0 z-10 mt-2 mr-4 xl:right-[calc((100%-1280px)/2)] w-32 rounded-md bg-white py-1 shadow-lg">
				<Menu.Item>
					{session.data ? (
						<button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => signOut()}>
							Sign out
						</button>
					) : (
						<button className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => signIn()}>
							Sign in
						</button>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
}
