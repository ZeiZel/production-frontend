import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { ITextareaProps } from './Textarea.props';

const meta: Meta<typeof Textarea> = {
	title: 'shared/Textarea',
	component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea & ITextareaProps>;

export const Base: Story = {
	render: () => (
		<Textarea>
			Lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem
			ipsum das ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das
			lorem ipsum das ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum
			das lorem ipsum das
		</Textarea>
	),
};

export const Primary: Story = {
	render: (args) => <Textarea {...args} />,
	args: {
		children:
			'Lorem ipsum das lorem ipsum das lorem ipsum das ' +
			'lorem ipsum das lorem ipsum das lorem ipsum das ipsum das lorem ipsum ' +
			'das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das ipsum das ' +
			'lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das',
	},
};

/*
 * todo
 *  нужно вывести ошибку через console.log и прокинуть синтетическую ошибку
 * */
export const Error: Story = {
	render: (args) => <Textarea {...args} />,
	args: {
		children:
			'Lorem ipsum das lorem ipsum das lorem ipsum das ' +
			'lorem ipsum das lorem ipsum das lorem ipsum das ipsum das lorem ipsum ' +
			'das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das ipsum das ' +
			'lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das lorem ipsum das',
	},
};
