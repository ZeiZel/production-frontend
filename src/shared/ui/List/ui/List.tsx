import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IListProps } from './List.props';

/**
 * Это компонент списка
 * - он реализован через виртуальный список, который не генерирует кучу разных нод
 * - предоставляет возможность экспандить список, если нужно
 * */
export const List = <T extends Array<T>>({ list, renderFn, expand }: IListProps<T>) => {
	return <Virtuoso totalCount={list.length} data={list} itemContent={renderFn} />;
};
