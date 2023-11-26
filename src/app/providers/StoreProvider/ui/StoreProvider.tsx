import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return <div>{children}</div>;
};
