import { Meta, StoryObj } from '@storybook/react';
import { SmsInput } from './SmsInput';

const meta: Meta<typeof SmsInput> = {
	title: 'shared/Input/SmsInput',
	component: SmsInput,
};
export default meta;

type Story = StoryObj<typeof SmsInput>;

export const Primary: Story = {
	render: () => <SmsInput value={'5231'} />,
};

export const Base: Story = {
	render: (args) => <SmsInput {...args} />,
};
