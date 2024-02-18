import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { IDelimiterProps } from './Divider.props';

const meta: Meta<typeof Divider> = {
	title: 'shared/Divider',
	component: Divider,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					padding: '10px',
					width: '400px',
					height: '50px',
					background: '#dadada',
					borderRadius: '10px',
				}}
			>
				<Story />
			</div>
		),
	],
};
export default meta;

type Story = StoryObj<typeof Divider & IDelimiterProps>;

export const Base: Story = {
	render: () => <Divider />,
};

export const Primary: Story = {
	render: (args) => <Divider {...args} />,
	args: {},
};
