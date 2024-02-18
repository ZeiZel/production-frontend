import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
	title: 'shared/Input/PasswordInput',
	component: PasswordInput,
};
export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Base: Story = {
	render: () => <PasswordInput value={'3241dsfas2'} />,
};

export const Primary: Story = {
	render: (args) => <PasswordInput {...args} />,
};
