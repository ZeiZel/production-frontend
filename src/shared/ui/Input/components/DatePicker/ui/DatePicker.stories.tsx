import { Meta, StoryObj } from '@storybook/react';
import { EFormatTemplate } from '@/shared/constants';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
	title: 'shared/Input/DatePicker',
	component: DatePicker,
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
	render: () => <DatePicker dateFormat={EFormatTemplate.DATE} value={'2023-03-21'} />,
};

export const Base: Story = {
	render: (args) => <DatePicker {...args} />,
};
