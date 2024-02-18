import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { withDecorators } from '@/shared/lib/storybook';
import { ECardTag, ECardType } from '@/shared/ui';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'shared/Card',
	component: Card,
	decorators: [withDecorators],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
	render: () => (
		<Card appearance={ECardType.PRIMARY} tag={ECardTag.DIV} shadow={'primary'}>
			Очень большое количество текста, которое здесь находится
		</Card>
	),
};

export const Primary: Story = {
	render: (args) => <Card {...args} />,
	args: {
		children: 'Очень большое количество текста, которое здесь находится',
		shadow: 'primary',
		tag: ECardTag.DIV,
		appearance: ECardType.PRIMARY,
		style: { padding: '30px', margin: '40px' },
	},
};

export const PRODUCT: Story = {
	render: (args) => <Card {...args} />,
	args: {
		children: 'Очень большое количество текста, которое здесь находится',
		shadow: 'primary',
		tag: ECardTag.DIV,
		appearance: ECardType.PRODUCT,
		style: { padding: '30px', margin: '40px' },
	},
};
