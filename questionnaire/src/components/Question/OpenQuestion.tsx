import { memo } from 'react';
import type { FC, ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Card, Typography, Space, Input, Form } from 'antd';
import type { Question } from '@app/models/interfaces';
import { Message } from '@app/components/Message';
import { QuestionMode } from '@app/models/enums';

type OpenQuestionComponent = FC<Question<QuestionMode.OPEN>>;

const OpenQuestion: OpenQuestionComponent = ({ id, title }) => {
	const methods = useFormContext();

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		console.log(e.target.value);
		methods.setValue(id, e.target.value);
	};

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
						<Space direction='vertical'>
							<Input.TextArea
								{...field}
								disabled={methods.formState.isSubmitted}
								onChange={(e) => field.onChange(e.target.value)}
								placeholder='Put your text here'
								allowClear
							/>
						</Space>
					</Card>
					<Message />
				</Card>
			)}
		/>
	);
};

export default memo(OpenQuestion);
