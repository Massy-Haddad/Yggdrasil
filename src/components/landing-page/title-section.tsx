import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import Button from '../ui/button'
import { BorderBeam } from '@/components/magicui/border-beam'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { NeonGradientCard } from '../magicui/neon-gradient-card'

interface TitleSectionProps {
	pill: string
	title: string
	subheading?: string
}

const TitleSection: React.FC<TitleSectionProps> = ({
	pill,
	title,
	subheading,
}) => {
	return (
		<React.Fragment>
			<section className="bg-transparent flex flex-col gap-4 justify-center items-start md:items-center text-center">
				<div
					className={cn(
						'group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
					)}
				>
					<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
						<span>{pill}</span>
						<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
					</AnimatedShinyText>
				</div>

				<h1 className="max-w-full bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl">
					{title}
				</h1>

				<p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance whitespace-pre-wrap">
					{subheading}
				</p>

				<Button />

				<NeonGradientCard
					borderSize={0}
					// neonColors={{ firstColor: '#ff00aa', secondColor: '#00FFF1' }}
					className="max-w-screen-xl items-center justify-center text-center relative rounded-xl mt-[8rem] perspective-1600 after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
				>
					<Image
						src="/assets/landing-page.png"
						className="relative w-full h-full aspect-video object-cover rounded-[inherit] border dark:block"
						width={1250}
						height={1250}
						alt="Yggdrasil application screenshot preview"
					/>
					<BorderBeam size={250} duration={12} delay={-11} borderWidth={2} />
				</NeonGradientCard>
			</section>
		</React.Fragment>
	)
}

export default TitleSection
