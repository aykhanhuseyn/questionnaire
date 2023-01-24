import { map } from 'lodash';
import { memo } from 'react';
import type { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Card, Typography, Checkbox, Space } from 'antd';
import { QuestionMode } from '@app/models/enums';
import type { Question } from '@app/models/interfaces';
import { Message } from '@app/components/Message';

type MultipleQuestionComponent = FC<Question<QuestionMode.MULTIPLE>>;

const MultipleQuestion: MultipleQuestionComponent = ({ id, title, config }) => {
	const methods = useFormContext();

	return (
		<Controller
			name={id}
			control={methods.control}
			render={({ field }) => (
				<Card type='inner'>
					<Typography.Title level={3} className='mb-3'>
						{title}
					</Typography.Title>
					<Card bordered={false}>
						<Checkbox.Group
							{...field}
							disabled={methods.formState.isSubmitted}
							onChange={(checkedValues) => field.onChange(checkedValues)}
						>
							<Space direction='vertical'>
								{map(config.options, ({ id, title }) => (
									<Checkbox key={id} value={id}>
										{title}
									</Checkbox>
								))}
							</Space>
						</Checkbox.Group>
					</Card>
					<Message />
				</Card>
			)}
		/>
	);
};

export default memo(MultipleQuestion);
