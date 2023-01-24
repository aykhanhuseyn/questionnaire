import { fromPairs, map } from 'lodash';
import { object, string, array, mixed } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { QuestionMode } from '@app/models/enums';
import { randomQuestions } from './randomQuestions';

export const questionsScheme = object().shape(
	fromPairs(
		map(randomQuestions, ({ id, config }) => {
			if (config.mode === QuestionMode.SINGLE) {
				return [
					id,
					string()
						.ensure()
						.oneOf(
							[config.correctID],
							`Your answer is wrong! Variant ${
								config.options.findIndex((o) => o.id === config.correctID) + 1
							} is correct.`,
						),
				];
			}
			if (config.mode === QuestionMode.MULTIPLE) {
				return [
					id,
					array()
						.ensure()
						.of(
							string()
								.ensure()
								.oneOf(
									config.correctIDs,
									`Your answer is wrong! ${config.correctIDs
										.map((id) => config.options.findIndex((co) => co.id === id) + 1)
										.join(', ')} fields are correct.`,
								),
						)
						.length(
							config.correctIDs.length,
							`Your answer is wrong! ${config.correctIDs
								.map((id) => config.options.findIndex((o) => o.id === id) + 1)
								.join(', ')} fields are correct.`,
						),
				];
			}
			return [id, mixed()];
		}),
	),
);

export const resolver = yupResolver(questionsScheme);
