import { Meta, StoryObj } from '@storybook/react';
import { withDecorators } from '@/shared/lib/storybook/withDecorators';
import { EButtonType } from '../model';
import { Button } from './Button';
import { IButtonProps } from './Button.props';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	decorators: [withDecorators],
};
export default meta;

type Story = StoryObj<typeof Button> & IButtonProps;

export const Base: Story = {
	render: () => <Button appearance={EButtonType.PRIMARY}>Кнопка основная</Button>,
};

export const Primary: Story = {
	render: (args) => <Button {...args} />,
	args: {
		children: 'Кнопка основная',
		appearance: EButtonType.PRIMARY,
	},
};
