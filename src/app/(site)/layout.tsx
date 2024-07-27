import React from 'react'

import { Header, Footer } from '@/components'

interface MarketingLayoutProps {
	children: React.ReactNode
}

const LandingPageLayout = ({ children }: MarketingLayoutProps) => {
	return (
		<>
			<Header />
			<main className="mx-auto flex-1 overflow-hidden">{children}</main>
			<Footer />
		</>
	)
}

export default LandingPageLayout
