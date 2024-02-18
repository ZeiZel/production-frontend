import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/shared/ui';
import { Modal } from './Modal';
import { IModalProps } from './Modal.props';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal & IModalProps>;

export const Primary: Story = {
	render: (args) => <Modal {...args} />,
	args: {
		children: 'Контент модалки',
		label: <Button>Нажми на меня</Button>,
	},
};
