import { Meta, StoryObj } from '@storybook/react';
import { RangeInput } from './RangeInput';

const meta: Meta<typeof RangeInput> = {
	title: 'shared/Input/RangeInput',
	component: RangeInput,
};
export default meta;

type Story = StoryObj<typeof RangeInput>;

export const Base: Story = {
	render: () => <RangeInput value={'2500'} range={{ max: 10000, min: 100 }} />,
};

export const Primary: Story = {
	render: (args) => <RangeInput {...args} />,
	args: {
		value: '4000',
		range: {
			min: 1000,
			max: 50000,
		},
	},
};
