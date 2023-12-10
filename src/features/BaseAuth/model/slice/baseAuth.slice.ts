import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseAuthSchema } from '../types/schema/baseAuth.schema';

const initialState: BaseAuthSchema = {};

const baseAuthSlice = createSlice({
	name: 'baseAuth',
	initialState,
	reducers: {
		setPassword: (state: BaseAuthSchema, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setUsername: (state: BaseAuthSchema, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
	},
});

export const { reducer: baseAuthReducer } = baseAuthSlice;
export const { actions: baseAuthActions } = baseAuthSlice;
