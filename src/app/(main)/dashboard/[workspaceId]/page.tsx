import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'
import { getWorkspaceDetails } from '@/lib/supabase/queries'

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
	const { data, error } = await getWorkspaceDetails(params.workspaceId)
	if (error || !data.length) redirect('/dashboard')
	return <div className="relative">Workspace : {params.workspaceId}</div>
}

export default Workspace
