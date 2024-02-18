import { Meta, StoryObj } from '@storybook/react';
import { EHTag } from '@/shared/ui';
import { HTag } from './HTag';
import { IHTagProps } from './HTag.props';

const meta: Meta<typeof HTag> = {
	title: 'shared/HTag',
	component: HTag,
};
export default meta;

type Story = StoryObj<typeof HTag & IHTagProps>;

export const Base: Story = {
	render: () => <HTag tag={EHTag.H1}>Главный заголовок</HTag>,
	args: {
		children: 'Главный заголовок',
		tag: EHTag.H1,
	},
};

export const Primary: Story = {
	render: (args) => <HTag {...args} />,
	args: {
		children: 'Главный заголовок',
		tag: EHTag.H1,
	},
};

export const Secondary: Story = {
	render: (args) => <HTag {...args} />,
	args: {
		children: 'Главный заголовок',
		tag: EHTag.H1,
		muted: true,
	},
};
