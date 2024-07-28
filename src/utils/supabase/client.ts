import { config } from 'dotenv'
import { createBrowserClient } from '@supabase/ssr'

config({ path: '.env' })

export function createClient() {
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)
}
