import { Inter } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import SessionProvider from './ui/session-provider';
import AccountDropdown from './ui/account-dropdown';
import NavLinks from './ui/nav-links';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	return (
		<html lang="en" className="h-full">
			<body className={inter.className + ' bg-gray-50 h-full'}>
				<SessionProvider session={session}>
					<div className="w-full h-[64px] bg-blue-600">
						<div className="max-w-7xl mx-auto h-full flex px-4 items-center justify-between">
							<div className="w-32 text-white text-[32px] font-bold md:w-40">WordPal</div>
							<AccountDropdown />
						</div>
					</div>
					<div className="max-w-7xl mx-auto flex-grow px-2 flex w-full h-[calc(100%-64px)] flex-col md:flex-row md:overflow-hidden">
						<div className="w-full flex-none md:w-48">
							<div className="flex h-full flex-col px-3 py-4 md:px-2 ">
								<div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
									<NavLinks />
								</div>
							</div>
						</div>
						<div className="flex-grow p-6 md:overflow-y-auto md:px-12 md:py-6 bg-white">{children}</div>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
