import { Hero } from '@/components/landing-page'
import { Meteors, Particles } from '@/components/ui'

const HomePage = () => {
	return (
		<>
			<Hero
				pill="🌿 Introducing Yggdrasil"
				title={'Your All-in-One \nPassion Tracker'}
				subheading={
					'From anime and gaming to fitness, in one customizable app \nOrganize and track all your hobbies'
				}
			/>

			<Particles
				className="absolute inset-0 -z-10"
				quantity={50}
				ease={70}
				size={0.05}
				staticity={40}
				color="#ffffff"
			/>
			{/* <Meteors number={30} /> */}
		</>
	)
}

export default HomePage
