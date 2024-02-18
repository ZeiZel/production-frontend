import { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
	title: 'shared/InputField',
	component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
	render: (args) => <InputField {...args} />,
	args: {
		children: 'Загрузка...',
	},
};
