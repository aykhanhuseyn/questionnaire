import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { users } from '@app/data/users';
import { LoginError } from '@app/utils/Errors';
import type { UILoginUser, User, AuthState } from '@app/models/interfaces';
import { RootState } from './store';

const initialState: AuthState = {
	loading: false,
	user: null,
	role: null,
	error: null,
};

export const login = createAsyncThunk(
	'auth/login',
	async (user: UILoginUser) =>
		new Promise<User>((resolve, reject) => {
			setTimeout(() => {
				const found = users.find(
					({ username, password }) =>
						username === user.username && password === user.password,
				);
				if (found) {
					resolve(found);
				} else {
					reject({ status: 404 });
				}
			}, Math.random() * 1000);
		}),
);

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.error = null;
				state.user = payload;
				state.role = payload.role;
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = new LoginError('username or password are incorrect', 404);
				state.user = null;
				state.role = null;
			}),
});

export const useRole = () => useSelector((state: RootState) => state.auth.role);
export const useUser = () => useSelector((state: RootState) => state.auth.user);
export const useAuth = () => useSelector((state: RootState) => state.auth);

export default auth.reducer;
