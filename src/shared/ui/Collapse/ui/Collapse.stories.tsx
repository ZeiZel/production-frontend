import { Meta, StoryObj } from '@storybook/react';
import { withDecorators } from '@/shared/lib/storybook';
import { P } from '@/shared/ui';
import { Collapse } from './Collapse';
import { IDropDownProps } from './Collapse.props';

const meta: Meta<typeof Collapse> = {
	title: 'shared/Collapse',
	component: Collapse,
	decorators: [withDecorators],
};
export default meta;

type Story = StoryObj<typeof Collapse & IDropDownProps>;

export const Base: Story = {
	render: () => <Collapse title={'Открыть'} details={<P>Определённые детали</P>} />,
};

export const Primary: Story = {
	render: (args) => <Collapse {...args} />,
	args: {
		title: 'Открыть',
		details: <P>Определённые детали</P>,
		ghost: true,
	},
};
