import { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
	title: 'shared/Input/PhoneInput',
	component: PhoneInput,
};
export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Base: Story = {
	render: () => <PhoneInput />,
};

export const Primary: Story = {
	render: (args) => <PhoneInput {...args} />,
};
