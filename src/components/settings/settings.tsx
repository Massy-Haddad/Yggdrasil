import React from 'react'

import SettingsForm from './settings-form'
import CustomDialogTrigger from '@/components/global/custom-dialog-trigger'

interface SettingsProps {
	children: React.ReactNode
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
	return (
		<CustomDialogTrigger header="Settings" content={<SettingsForm />}>
			{children}
		</CustomDialogTrigger>
	)
}

export default Settings
