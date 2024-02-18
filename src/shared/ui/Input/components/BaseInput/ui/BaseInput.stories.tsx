import { Meta, StoryObj } from '@storybook/react';
import { BaseInput } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
	title: 'shared/Input/BaseInput',
	component: BaseInput,
};
export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Base: Story = {
	render: () => <BaseInput value={'Какое-то значение в инпуте'} />,
};

export const Primary: Story = {
	render: (args) => <BaseInput {...args} />,
	args: {
		value: 'Значение поля',
	},
};
