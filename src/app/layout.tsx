import type { Metadata } from "next";

import './globals.css'
import { twMerge } from 'tailwind-merge'
import { DM_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import { ThemeProvider } from '@/components/theme-provider'
import AppStateProvider from '@/lib/providers/state-provider'
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider'

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
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={twMerge('bg-background', inter.className)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					// disableTransitionOnChange
				>
					<AppStateProvider>
						<SupabaseUserProvider>
							{children}
							<Toaster />
						</SupabaseUserProvider>
					</AppStateProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
