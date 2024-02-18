import React, { ForwardedRef, forwardRef, useState } from 'react';
import { EIcons, Icon } from '../../../../Icon';
import { BaseInput } from '../../BaseInput';
import { IPasswordInputProps } from './PasswordInput.props';

/** поле ввода пароля */
export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
	({ ...props }: IPasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);

		const handleTogglePassword = () =>
			setToggleShowPassword((prevShowPassword) => !prevShowPassword);

		return (
			<BaseInput
				caption={'Пароль'}
				pattern={'.{1,256}'}
				type={toggleShowPassword ? 'text' : 'password'}
				{...props}
				ref={ref}
			>
				{toggleShowPassword ? (
					<Icon
						onClick={handleTogglePassword}
						name={EIcons.OpenedEye}
						alt={'показать пароль'}
					/>
				) : (
					<Icon
						onClick={handleTogglePassword}
						name={EIcons.ClosedEye}
						alt={'скрыть пароль'}
					/>
				)}
			</BaseInput>
		);
	},
);
