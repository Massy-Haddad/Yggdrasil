import type { Metadata } from "next";

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import db from '@/lib/supabase/db'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Yggdrasil: Your All-in-One Passion Tracker',
	description:
		'Organize and track all your hobbies - from anime and gaming to fitness - in one customizable app.',
	keywords: [
		'hobby tracker',
		'anime',
		'gaming',
		'fitness',
		'productivity',
		'personal dashboard',
	],
	authors: [{ name: 'Next.js Team', url: 'https://nextjs.org' }],
	openGraph: {
		title: 'Yggdrasil - Centralize Your Interests',
		description:
			'Track, organize, and enjoy your hobbies with our all-in-one app.',
		images: ['/path-to-your-og-image.jpg'],
	},
	viewport: 'width=device-width, initial-scale=1',
	themeColor: '#F35815',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	console.log(db !== null)
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
