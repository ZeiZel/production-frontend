import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { EButtonType } from '../model';
import { withDecorators } from '@/shared/lib';

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
	decorators: [withDecorators],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: 'Кнопка основная',
		appearance: EButtonType.PRIMARY,
	},
};
