'use client'

import React, { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signup } from '@/lib/server-actions/auth-actions'
import { FormSchema, SignUpFormSchema } from '@/lib/types'
import { cn } from '@/lib/utils'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
	FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui'
import { Loader2 } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '@/components/ui/button'

interface UserSignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserSignUpForm({
	className,
	...props
}: UserSignUpFormProps) {
	const router = useRouter()
	const [submitError, setSubmitError] = useState('')
	const [confirmation, setConfirmation] = useState(false)

	const form = useForm<z.infer<typeof SignUpFormSchema>>({
		mode: 'onChange',
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
	const isLoading = form.formState.isSubmitting
	const onSubmit = async ({ email, password }: z.infer<typeof FormSchema>) => {
		const { error } = await signup({ email, password })
		if (error) {
			setSubmitError(error.message)
			form.reset()
			return
		}
		setConfirmation(true)
	}

	async function onSignUpGithub() {
		setIsGitHubLoading(true)
		// TODO: Add signin using preferred provider
		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsGitHubLoading(false)
	}

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<Form {...form}>
				<form
					onChange={() => {
						if (submitError) setSubmitError('')
					}}
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="grid gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Email</FormLabel> */}
									<FormControl>
										<Input
											id="email"
											placeholder="name@example.com"
											type="email"
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											disabled={isLoading || isGitHubLoading}
											{...field}
										/>
									</FormControl>
									{/* <FormDescription>This is your email address.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Password</FormLabel> */}
									<FormControl>
										<Input
											id="password"
											placeholder="Enter a password"
											type="password"
											autoCapitalize="none"
											autoComplete="password"
											autoCorrect="off"
											disabled={isLoading || isGitHubLoading}
											{...field}
										/>
									</FormControl>
									{/* <FormDescription>This is your password.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									{/* <FormLabel>Confirm password</FormLabel> */}
									<FormControl>
										<Input
											id="confirmPassword"
											placeholder="Confirm your password"
											type="password"
											autoCapitalize="none"
											autoComplete="password"
											autoCorrect="off"
											disabled={isLoading || isGitHubLoading}
											{...field}
										/>
									</FormControl>
									{/* <FormDescription>Confirm your password.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>

						<button
							type="submit"
							className={cn(buttonVariants())}
							disabled={isLoading || isGitHubLoading}
						>
							{isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
							Sign In with Email
						</button>
					</div>
				</form>
			</Form>

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background text-muted-foreground px-2">
						Or continue with
					</span>
				</div>
			</div>

			<button
				type="button"
				className={cn(buttonVariants({ variant: 'outline' }))}
				onClick={() => {
					onSignUpGithub()
				}}
				disabled={isLoading || isGitHubLoading}
			>
				{isGitHubLoading ? (
					<Loader2 className="mr-2 size-4 animate-spin" />
				) : (
					<GitHubLogoIcon className="mr-2 size-4" />
				)}
				Github
			</button>
		</div>
	)
}
