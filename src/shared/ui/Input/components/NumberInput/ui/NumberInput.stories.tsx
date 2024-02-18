import { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
	title: 'shared/Input/NumberInput',
	component: NumberInput,
};
export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Base: Story = {
	render: () => <NumberInput value={'123123123'} />,
};

export const Primary: Story = {
	render: (args) => <NumberInput {...args} />,
};
