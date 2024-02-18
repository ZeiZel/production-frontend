import { Meta, StoryObj } from '@storybook/react';
import { EIcons } from '@/shared/ui';
import { Icon } from './Icon';
import { IIconProps } from './Icon.props';

const meta: Meta<typeof Icon> = {
	title: 'shared/Icon',
	component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon & IIconProps>;

export const Base: Story = {
	render: () => <Icon name={EIcons.OK} width={40} height={40} />,
};

export const Primary: Story = {
	render: (args) => <Icon {...(args as IIconProps)} />,
	args: {
		name: EIcons.Other,
		alt: 'Другое',
		width: 50,
		height: 50,
	},
};
