import { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from './SelectInput';

const meta: Meta<typeof SelectInput> = {
	title: 'shared/Input/SelectInput',
	component: SelectInput,
};
export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Base: Story = {
	render: () => (
		<SelectInput values={[{ value: 'azsd', title: 'Title' }]}>Дефолтное значение</SelectInput>
	),
};

export const Primary: Story = {
	render: (args) => <SelectInput {...args} />,
};
