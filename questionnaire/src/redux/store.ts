import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import questionnaire from './questionnaire';

const reducer = {
	auth,
	questionnaire,
};

export const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
