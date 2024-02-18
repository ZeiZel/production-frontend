import { Meta, StoryObj } from '@storybook/react';
import { CardInput } from './CardInput';

const meta: Meta<typeof CardInput> = {
	title: 'shared/Input/CardInput',
	component: CardInput,
};
export default meta;

type Story = StoryObj<typeof CardInput>;

export const Base: Story = {
	render: () => <CardInput value={'1234123412341234'} />,
};

export const Primary: Story = {
	render: (args) => <CardInput {...args} />,
	args: {
		value: '1234123412341234',
	},
};
