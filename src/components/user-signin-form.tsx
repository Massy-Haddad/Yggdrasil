'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from '@/lib/server-actions/auth-actions'
import { FormSchema } from '@/lib/types'
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
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'

import { Loader2 } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

interface UserSignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserSignInForm = ({ className, ...props }: UserSignInFormProps) => {
	const router = useRouter()
	const [submitError, setSubmitError] = useState('')

	const form = useForm<z.infer<typeof FormSchema>>({
		mode: 'onChange',
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)

	const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
		formData
	) => {
		const error = await login(formData)

		if (error) {
			setSubmitError(error)
			form.reset()
			return
		}

		router.replace('/dashboard')
	}

	async function onSignInGithub() {
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
					onSignInGithub()
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

export default UserSignInForm
