import { memo, useMemo } from 'react';
import { find, keys } from 'lodash';
import { useUpdateEffect } from 'ahooks';
import { useDispatch } from 'react-redux';
import { Typography, Button, Divider } from 'antd';
import type { FieldValues } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '@app/data/questions';
import { QuestionMode } from '@app/models/enums';
import {
	OpenQuestion,
	SingleQuestion,
	MultipleQuestion,
} from '@app/components/Question';
import { addResult, useUser } from '@app/redux';
import { resolver } from '@app/utils/questionsSchema';
import { randomQuestions } from '@app/utils/randomQuestions';
import type { Question, QuestionnaireForm } from '@app/models/interfaces';

const questionMapper = {
	[QuestionMode.SINGLE](question: Question) {
		return (
			<SingleQuestion
				key={question.id}
				{...(question as Question<QuestionMode.SINGLE>)}
			/>
		);
	},
	[QuestionMode.MULTIPLE](question: Question) {
		return (
			<MultipleQuestion
				key={question.id}
				{...(question as Question<QuestionMode.MULTIPLE>)}
			/>
		);
	},
	[QuestionMode.OPEN](question: Question) {
		return (
			<OpenQuestion
				key={question.id}
				{...(question as Question<QuestionMode.OPEN>)}
			/>
		);
	},
};

const Questionnaire = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = location?.state?.id;
	const user = useUser();
	const methods = useForm<QuestionnaireForm>({
		mode: 'onSubmit',
		reValidateMode: 'onSubmit',
		resolver,
	});

	const question: Question = useMemo(
		() => find(questions, { id })!,
		[location?.state?.id],
	);

	useUpdateEffect(() => {
		dispatch(
			addResult({
				answers: methods.getValues(),
				userID: user?.id!,
				questions: randomQuestions,
				all: keys(methods.getValues()).length,
				correct:
					keys(methods.getValues()).length - keys(methods.formState.errors).length,
				wrong: keys(methods.formState.errors).length,
			}),
		);
		methods.reset();
	}, [methods.formState.isSubmitted]);

	const handleSubmit = async (values: FieldValues) => {
		// console.log({ values });
	};

	return (
		<FormProvider {...methods}>
			<form
				name='questionnaire'
				autoComplete='off'
				onSubmit={methods.handleSubmit(handleSubmit)}
			>
				<Typography.Title level={2}>Welcome to Questionnaire</Typography.Title>
				{questionMapper[question?.config.mode](question)}
				<Divider />
				<Button htmlType='submit'>Submit</Button>
			</form>
		</FormProvider>
	);
};

export default memo(Questionnaire);
