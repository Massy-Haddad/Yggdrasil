'use server'
import z from 'zod'
import { FormSchema } from '../types'

import { createClient } from '@/utils/supabase/server'

export async function login({ email, password }: z.infer<typeof FormSchema>) {
	const supabase = createClient()

	const { error } = await supabase.auth.signInWithPassword({ email, password })

	if (error) return error.message
}

export async function signup({ email, password }: z.infer<typeof FormSchema>) {
	console.log('🔐 signup called')
	const supabase = createClient()

	const { data } = await supabase.from('users').select('*').eq('email', email)
	console.log(data)

	if (data?.length)
		return { error: { message: 'User with this email already exists' } }
	const { data: responseData } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`,
		},
	})

	console.log(responseData)
	return responseData
}
