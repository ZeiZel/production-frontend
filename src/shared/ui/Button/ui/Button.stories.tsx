import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { EButtonType } from '../model';
import { withDecorators } from '@/shared/lib';
import { Theme } from '@/app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
	title: 'Components/UI/Button',
	component: Button,
	decorators: [withDecorators(Theme.LIGHT)],
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
