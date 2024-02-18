import { Meta, StoryObj } from '@storybook/react';
import { CheckboxInput } from './CheckboxInput';

const meta: Meta<typeof CheckboxInput> = {
	title: 'shared/Input/CheckboxInput',
	component: CheckboxInput,
};
export default meta;

type Story = StoryObj<typeof CheckboxInput>;

export const Checkbox: Story = {
	render: () => <CheckboxInput label={'Чекни меня'} checkboxType={'checkbox'} />,
};

export const Button: Story = {
	render: () => <CheckboxInput label={'Тыкни на меня меня'} checkboxType={'button'} />,
};

export const Slider: Story = {
	render: () => <CheckboxInput label={'Слайдни меня'} checkboxType={'slider'} />,
};
