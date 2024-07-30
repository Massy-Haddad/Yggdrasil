/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'yvbnmtucreekivxabsdq.supabase.co',
		// 		port: '5432',
		// 	},
		// ],
		// remotePatterns: [
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'yvbnmtucreekivxabsdq.supabase.co',
		// 		port: '54321',
		// 		pathname: '/storage/v1/object/public',
		// 	},
		// ],
		domains: ['yvbnmtucreekivxabsdq.supabase.co'],
	},
}

export default nextConfig