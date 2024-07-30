import { redirect } from 'next/navigation'

import db from '@/lib/supabase/db'
import { createClient } from '@/utils/supabase/server'
import { getUserSubscriptionStatus } from '@/lib/supabase/queries'
import { DashboardSetup } from '@/components/dashboard-setup'

const DashboardPage = async () => {
	const supabase = createClient()

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser()
	if (error || !user) {
		redirect('/login')
	}

	const workspace = await db.query.workspaces.findFirst({
		where: (workspace, { eq }) => eq(workspace.workspaceOwner, user.id),
	})

	const { data: subscription, error: subscriptionError } =
		await getUserSubscriptionStatus(user.id)

	if (subscriptionError) return

	if (!workspace)
		return (
			<div className="bg-background h-screen w-screen flex justify-center items-center">
				<DashboardSetup user={user} subscription={subscription} />
			</div>
		)

	redirect(`/dashboard/${workspace.id}`)
}

export default DashboardPage
