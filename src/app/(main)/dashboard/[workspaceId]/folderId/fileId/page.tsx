export const dynamic = 'force-dynamic'
import { redirect } from 'next/navigation'

import { getFileDetails } from '@/lib/supabase/queries'

const File = async ({ params }: { params: { fileId: string } }) => {
	const { data, error } = await getFileDetails(params.fileId)

	if (error || !data.length) redirect('/dashboard')

	return <div className="relative ">File : {JSON.stringify(data[0])}</div>
}

export default File
