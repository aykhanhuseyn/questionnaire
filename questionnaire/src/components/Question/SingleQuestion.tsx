import { memo } from 'react';
import { map } from 'lodash';
import type { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Card, Typography, Radio, Space } from 'antd';
import { QuestionMode } from '@app/models/enums';
import { Message } from '@app/components/Message';
import type { Question } from '@app/models/interfaces';

type SingleQuestionComponent = FC<Question<QuestionMode.SINGLE>>;

const SingleQuestion: SingleQuestionComponent = ({ id, title, config }) => {
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
						<Radio.Group
							{...field}
							disabled={methods.formState.isSubmitted}
							onChange={(e) => field.onChange(e.target.value)}
						>
							<Space direction='vertical'>
								{map(config.options, ({ id, title }) => (
									<Radio key={id} value={id}>
										{title}
									</Radio>
								))}
							</Space>
						</Radio.Group>
					</Card>
					<Message />
				</Card>
			)}
		/>
	);
};

export default memo(SingleQuestion);
