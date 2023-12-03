import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserSchema } from '../types';

const initialState: UserSchema = {};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: UserSchema, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducers } = userSlice;
