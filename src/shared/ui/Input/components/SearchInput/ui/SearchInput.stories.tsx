import { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
	title: 'shared/Input/SearchInput',
	component: SearchInput,
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Base: Story = {
	render: () => <SearchInput value={'Платежи'} />,
};

export const Primary: Story = {
	render: (args) => <SearchInput {...args} />,
};
