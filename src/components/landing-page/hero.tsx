'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { BorderBeam, AnimatedShinyText } from '@/components/ui'

interface HeroProps {
	pill: string
	title: string
	subheading?: string
}

const Hero: React.FC<HeroProps> = ({ pill, title, subheading }) => {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<section
			id="hero"
			className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
		>
			<div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
				<AnimatedShinyText className="inline-flex items-center justify-center">
					<span>{pill}</span>
					<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
				</AnimatedShinyText>
			</div>
			<h1 className="animate-fade-in -translate-y-4 text-balance whitespace-pre-wrap bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:to-white/40">
				{title}
			</h1>
			<p className="animate-fade-in mb-12 -translate-y-4 text-balance whitespace-pre-wrap text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
				{subheading}
			</p>

			<Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
				<span>Get Started for free </span>
				<ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
			</Button>

			<div
				ref={ref}
				className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
			>
				<div
					className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
						inView ? 'before:animate-image-glow' : ''
					}`}
				>
					<BorderBeam
						size={200}
						duration={12}
						delay={11}
						colorFrom="var(--color-one)"
						colorTo="var(--color-two)"
					/>

					<Image
						width={1250}
						height={1250}
						src="/assets/hero-dark.png"
						alt="Hero section's image"
						className="relative hidden size-full rounded-[inherit] border object-contain dark:block"
					/>
					<Image
						width={1250}
						height={1250}
						src="/assets/hero-dark.png"
						alt="Hero section's image"
						className="relative block size-full rounded-[inherit]  border object-contain dark:hidden"
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
