import { createElement } from 'react';
import {
	QuestionOutlined,
	OrderedListOutlined,
	CheckCircleOutlined,
	CheckSquareOutlined,
	AlignLeftOutlined,
} from '@ant-design/icons';
import { map } from 'lodash';
import type { MenuProps } from 'antd';
import type { NavigateFunction } from 'react-router-dom';
import { QuestionMode } from '@app/models/enums';
import { randomQuestions } from '@app/utils/randomQuestions';

export const iconMap: IconMap = {
	[QuestionMode.SINGLE]: CheckCircleOutlined,
	[QuestionMode.MULTIPLE]: CheckSquareOutlined,
	[QuestionMode.OPEN]: AlignLeftOutlined,
};

export type IconMap = Record<
	typeof QuestionMode[keyof typeof QuestionMode],
	typeof CheckCircleOutlined
>;

export const getMenuItems: GetMenuItems = (navigate) => [
	{
		key: 'questionnaire',
		label: 'Questionnaire',
		icon: createElement(OrderedListOutlined),
		children: map(randomQuestions, (question) => ({
			key: question.id,
			icon: createElement(iconMap[question.config.mode]),
			label: question.title,
			onClick: () => {
				navigate('questionnaire', { state: { id: question.id } });
			},
		})),
	},
	{
		key: 'review',
		label: 'Results',
		icon: createElement(QuestionOutlined),
		onClick: () => {
			navigate('review');
		},
	},
];

export type GetMenuItems = (navigate: NavigateFunction) => MenuProps['items'];
