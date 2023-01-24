import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { QuestionState, Result } from '@app/models/interfaces';
import { RootState } from './store';

const initialState: QuestionState = {
	results: [],
};

const questionnaire = createSlice({
	name: 'questionnaire',
	initialState,
	reducers: {
		addResult: (state, { payload }: PayloadAction<Omit<Result, 'id'>>) => {
			state.results = [...state.results, { id: nanoid(), ...payload }];
		},
	},
});

export const useResults = () =>
	useSelector((state: RootState) => state.questionnaire.results);

export const { addResult } = questionnaire.actions;

export default questionnaire.reducer;
