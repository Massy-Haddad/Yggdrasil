import React from 'react'

import { ArrowRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import Button from '../ui/button'
import { BorderBeam } from '@/components/magicui/border-beam'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import Image from 'next/image'

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
			<section className="flex flex-col gap-4 justify-center items-start md:items-center text-center">
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

				<div className="relative mt-[8rem] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
					<div className="absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"></div>
					<Image
						src="/assets/landing-page.jpg"
						className="relative w-full h-full aspect-video object-cover rounded-[inherit] border dark:block"
						width={1000}
						height={1000}
						alt="Yggdrasil application screenshot"
					/>
					<BorderBeam size={250} duration={12} delay={-11} />
				</div>
			</section>
		</React.Fragment>
	)
}

export default TitleSection
