import { Meta, StoryObj } from '@storybook/react';
import { P } from './P';
import { IPProps } from './P.props';

const meta: Meta<typeof P> = {
	title: 'shared/P',
	component: P,
};
export default meta;

type Story = StoryObj<typeof P & IPProps>;

export const Base: Story = {
	render: () => (
		<P size={'m'} bold={false} formatText={'none'} muted={false} noWrap={false}>
			Очень много текста, который вставлен в параграф
		</P>
	),
	args: {},
};

export const Primary: Story = {
	render: (args) => <P {...args} />,
	args: {
		size: 'm',
		noWrap: false,
		muted: false,
		children: 'Очень много текста, который вставлен в параграф',
		formatText: 'none',
	},
};

export const Secondary: Story = {
	render: (args) => <P {...args} />,
	args: {
		children: 'Очень много текста, который вставлен в параграф',
		size: 's',
		muted: true,
	},
};
