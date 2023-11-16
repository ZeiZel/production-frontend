import { PluginItem } from '@babel/core';

/*
 * Данный плаги позволяет удалять определённые пропсы со всех реакт-компонентов
 * конертно он нужен для удаления data-testid
 * */

export default function (): PluginItem {
	return {
		visitor: {
			Program(path, state) {
				const forbidden = state.opts.props || [];

				path.traverse({
					JSXIdentifier(current) {
						const nodeName = current.node.name;

						if (forbidden.includes(nodeName)) {
							current.parentPath.remove();
						}
					},
				});
			},
		},
	};
}
