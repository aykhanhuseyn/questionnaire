export type { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import type { LoginError } from '@app/utils/Errors';
import type { Role, QuestionMode } from './enums';
import type { ID } from './types';

export interface AuthState {
	loading: boolean;
	user: User | null;
	role: Role | null;
	error: LoginError | null;
}

export interface LoginUser {
	username: string;
	password: string;
}

export interface UILoginUser extends LoginUser {
	remember?: boolean;
}

export interface Geo {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface User extends LoginUser {
	id: number;
	name: string;
	email: string;
	role: Role;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

// questions

interface SingleQuestion {
	mode: QuestionMode.SINGLE;
	correctID: ID;
	options: QuestionOption[];
}

interface MultipleQuestion {
	mode: QuestionMode.MULTIPLE;
	correctIDs: ID[];
	options: QuestionOption[];
}

interface OpenQuestion {
	mode: QuestionMode.OPEN;
}

type QuestionConfig<M extends QuestionMode = any> =
	M extends QuestionMode.SINGLE
		? SingleQuestion
		: M extends QuestionMode.MULTIPLE
		? MultipleQuestion
		: M extends QuestionMode.OPEN
		? OpenQuestion
		: OpenQuestion | SingleQuestion | MultipleQuestion;

interface QuestionOption {
	id: ID;
	title: string;
}

export interface Question<M extends QuestionMode = any> {
	id: ID;
	title: string;
	config: QuestionConfig<M>;
}

export type QuestionnaireForm = Record<ID, ID | ID[] | string>;

export interface Result {
	id: ID;
	userID: User['id'];
	answers: QuestionnaireForm;
	questions: Question[];
	all: number;
	correct: number;
	wrong: number;
}

export interface QuestionState {
	results: Result[];
}
