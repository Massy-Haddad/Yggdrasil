import { FC } from 'react'

interface DropdownProps {
	title: string
	id: string
	listType: 'folder' | 'file'
	iconId: string
	children?: React.ReactNode
	disabled?: boolean
}

const Dropdown: FC<DropdownProps> = ({
	title,
	id,
	listType,
	iconId,
	children,
	disabled,
	...props
}) => {
	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex items-center">
				<span className="text-Neutrals-8 text-lg">{iconId}</span>
				<span className="text-Neutrals-8 text-lg ml-2">{title}</span>
			</div>
			{children}
		</div>
	)
}

export default Dropdown
