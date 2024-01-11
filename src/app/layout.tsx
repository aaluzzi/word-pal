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
			<body className={inter.className}>
				<SessionProvider session={session}>
					<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
						<div className="w-full flex-none md:w-64">
							<SideNav />
						</div>
						<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
