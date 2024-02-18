import { Meta, StoryObj } from '@storybook/react';
import { Button, P } from '@/shared/ui';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
	title: 'shared/Dropdown',
	component: Dropdown,
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
	args: {
		children: <P>Очень много контента</P>,
		label: <Button>Нажми меня</Button>,
	},
};
