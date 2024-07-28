'use server'

import z from 'zod'

import { createClient } from '@/utils/supabase/server'
import { FormSchema, SignUpFormSchema } from '../types'

export async function login({ email, password }: z.infer<typeof FormSchema>) {
	const supabase = createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const credentials = {
		email: email,
		password: password,
	}

	const { error } = await supabase.auth.signInWithPassword(credentials)

	if (error) return error
}

export async function signup({ email, password }: z.infer<typeof FormSchema>) {
	const supabase = createClient()

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const credentials = {
		email: email,
		password: password,
	}

	const { data } = await supabase
		.from('profiles')
		.select('*')
		.eq('email', email)

	if (data?.length) return { error: { message: 'User already exists', data } }

	const response = await supabase.auth.signUp({
		email,
		password,
	})

	return response
}
