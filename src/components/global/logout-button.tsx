'use client'

import { useRouter } from 'next/navigation'

import { createClient } from '@/utils/supabase/client'
import { useAppState } from '@/lib/providers/state-provider'

import { Button } from '@/components/ui/button'

interface LogoutButtonProps {
	children: React.ReactNode
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ children }) => {
	const { dispatch } = useAppState()
	const router = useRouter()
	const supabase = createClient()
	const logout = async () => {
		await supabase.auth.signOut()
		router.refresh()
		dispatch({ type: 'SET_WORKSPACES', payload: { workspaces: [] } })
	}
	return (
		<Button variant="ghost" size="icon" className="p-0" onClick={logout}>
			{children}
		</Button>
	)
}

export default LogoutButton