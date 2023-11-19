import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IButtonProps } from './Button.props';
import { EButtonType } from '../model';

const meta: Meta<typeof Button> = {
	title: 'Components/UI/Button',
	component: Button,
	decorators: [],
};
export default meta;

type Story = StoryObj<typeof Button> & IButtonProps;

export const Primary: Story = {
	args: {
		children: 'Кнопка основная',
		appearance: EButtonType.PRIMARY,
	},
};
