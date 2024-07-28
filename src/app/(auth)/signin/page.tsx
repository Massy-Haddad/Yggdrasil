import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import { UserSignInForm } from '@/components'
import { buttonVariants } from '@/components/ui/button'

const LoginPage = () => {
	return (
		<div className="container flex h-screen w-screen flex-col items-center justify-center">
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute left-4 top-4 md:left-8 md:top-8'
				)}
			>
				<>
					<ChevronLeft className="mr-2 size-4" />
					Back
				</>
			</Link>
			<div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
				<div className="flex flex-col gap-2 text-center">
					<Image
						src="/logo.png"
						alt="Yggdrasil logo"
						width={50}
						height={50}
						className="mx-auto h-24 w-24"
					/>
					<h1 className="text-2xl font-semibold tracking-tight">
						Welcome back
					</h1>
					<p className="text-muted-foreground text-sm">Login to your account</p>
				</div>
				<UserSignInForm />
				<p className="text-muted-foreground px-8 text-center text-sm">
					<Link
						href="/signup"
						className="hover:text-brand underline underline-offset-4"
					>
						Don&apos;t have an account? Sign Up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default LoginPage
