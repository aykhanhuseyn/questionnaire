import { questions } from '@app/data/questions';
import { shuffle, slice } from 'lodash';

const MAX_QUESTION_COUNT = 3;

// TODO: change randomness logic
export const randomQuestions = slice(shuffle(questions), 0, MAX_QUESTION_COUNT);
