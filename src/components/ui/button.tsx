import { CheckIcon, ChevronRightIcon } from 'lucide-react'

import React from 'react'

const Button = () => {
	return (
		<button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black ease-in-out [--animation-delay:600ms]">
			<span className="group inline-flex items-center">
				Get Started for free
				<ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
			</span>
		</button>
	)
}

export default Button
