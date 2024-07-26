import React from 'react'

interface MarketingLayoutProps {
	children: React.ReactNode
}

const LandingPageLayout = ({ children }: MarketingLayoutProps) => {
	return <main className="mx-auto flex-1 overflow-hidden">{children}</main>
}

export default LandingPageLayout
