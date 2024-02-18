import { Meta, StoryObj } from '@storybook/react';
import { withDecorators } from '@/shared/lib/storybook';
import { AppLink } from './AppLink';
import { IAppLinkProps } from './AppLink.props';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	decorators: [withDecorators],
};
export default meta;

type Story = StoryObj<typeof AppLink & IAppLinkProps>;

export const InternalLink: Story = {
	render: () => <AppLink type={'internal'}>Внутреняя ссылка</AppLink>,
	args: {
		children: 'Внутреняя ссылка',
		type: 'internal',
	},
};

export const ExternalLink: Story = {
	render: (args) => <AppLink {...args} />,
	args: {
		children: 'Внешняя ссылка',
		type: 'external',
	},
};
