import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from './ui/sidenav';
import { getServerSession } from 'next-auth';
import SessionProvider from './ui/session-provider';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<body className={inter.className + "w-full h-screen flex flex-col items-center bg-gray-50"}>
				<SessionProvider session={session}>
					<div className="flex justify-center w-full h-[64px] bg-blue-600">
						<div className="flex flex-grow px-4 items-center justify-between h-full max-w-[1280px]">
							<div className="w-32 text-white text-[32px] font-bold md:w-40">
								WordPal
							</div>
						</div>
					</div>
					<div className="max-w-[1280px] flex-grow flex w-full h-full flex-col md:flex-row md:overflow-hidden">
						<div className="w-full flex-none md:w-48">
							<SideNav />
						</div>
						<div className="flex-grow p-6 md:overflow-y-auto md:px-12 md:py-6 bg-white">{children}</div>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
