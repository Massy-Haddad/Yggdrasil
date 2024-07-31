import db from '@/lib/supabase/db'
import { createClient } from '@/utils/supabase/server'
import { Subscription } from '@/lib/supabase/supabase.types'

import { LogOut } from 'lucide-react'
import { ModeToggle, LogoutButton } from '@/components/global'
import CypressProfileIcon from '@/components/icons/yggdrasilPageIcon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserCardProps {
	subscription: Subscription | null
}

const UserCard: React.FC<UserCardProps> = async ({ subscription }) => {
	const supabase = createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) return
	const response = await db.query.users.findFirst({
		where: (u, { eq }) => eq(u.id, user.id),
	})
	let avatarPath
	if (!response) return
	if (!response.avatarUrl) avatarPath = ''
	else {
		avatarPath = supabase.storage
			.from('avatars')
			.getPublicUrl(response.avatarUrl)?.data.publicUrl
	}
	const profile = {
		...response,
		avatarUrl: avatarPath,
	}

	return (
		<article className="hidden sm:flex justify-between items-center px-2 py-2 dark:bg-primary-foreground rounded-3xl ">
			<aside className="flex justify-center items-center gap-2">
				<Avatar>
					<AvatarImage src={profile.avatarUrl} />
					<AvatarFallback>
						<CypressProfileIcon />
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<span className="text-muted-foreground">
						{subscription?.status === 'active' ? 'Pro Plan' : 'Free Plan'}
					</span>
					<small className="w-[100px] overflow-hidden overflow-ellipsis ">
						{profile.email}
					</small>
				</div>
			</aside>
			<div className="flex items-center justify-center gap-1">
				<LogoutButton>
					<LogOut />
				</LogoutButton>
				<ModeToggle />
			</div>
		</article>
	)
}

export default UserCard
