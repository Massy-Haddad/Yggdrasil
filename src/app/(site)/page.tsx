import TitleSection from '@/components/landing-page/title-section'

const HomePage = () => {
	return (
		<>
			<section className=" overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
				<TitleSection
					pill="🌿 Introducing Yggdrasil"
					title={'All-In-One Collaboration \nand Productivity Platform'}
					subheading={
						'From anime and gaming to fitness, in one customizable app \nOrganize and track all your hobbies'
					}
				/>
			</section>
		</>
	)
}

export default HomePage
