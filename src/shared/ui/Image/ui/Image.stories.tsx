import { Meta, StoryObj } from '@storybook/react';
import { OtherIcon } from '@/shared/assets';
import { Image } from './Image';

const icon = OtherIcon as unknown;

const meta: Meta<typeof Image> = {
	title: 'shared/Image',
	component: Image,
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
	render: (args) => <Image {...args} />,
	args: {
		src: icon as string,
		alt: 'Другое',
		width: 50,
		height: 50,
	},
};
