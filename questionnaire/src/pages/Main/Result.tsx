import { useReactive } from 'ahooks';
import { Card, Divider, List, Typography } from 'antd';
import { useResults } from '@app/redux';
import { Review } from '@app/components';

const Result = () => {
	const results = useResults();
	const state = useReactive({
		all: 0,
		wrong: 0,
		correct: 0,
	});

	return (
		<Card>
			<List
				dataSource={results}
				rowKey={(item) => item.id}
				header={<Typography.Title level={2}>Results</Typography.Title>}
				renderItem={(item) => (
					<List.Item
						onClick={() => {
							state.all = item.all;
							state.wrong = item.wrong;
							state.correct = item.correct;
						}}
					>
						<Typography.Text>{item.questions?.at(0)?.title}</Typography.Text>
					</List.Item>
				)}
				bordered
			/>

			<Divider />

			{Boolean(results?.length) && (
				<Review all={state.all} wrong={state.wrong} correct={state.correct} />
			)}
		</Card>
	);
};

export default Result;
