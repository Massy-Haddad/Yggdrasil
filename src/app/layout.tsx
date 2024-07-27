import type { Metadata } from "next";

import './globals.css'
import { twMerge } from 'tailwind-merge'
import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import db from '@/lib/supabase/db'

const inter = DM_Sans({ subsets: ['latin'] })

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
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={twMerge(
					'bg-background min-h-screen font-sans antialiased overflow-x-hidden',
					inter.className
				)}
			>
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
