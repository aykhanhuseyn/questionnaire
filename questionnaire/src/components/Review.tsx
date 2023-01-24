import { memo } from 'react';
import type { FC } from 'react';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const Review: FC<Record<'correct' | 'wrong' | 'all', number>> = ({
	all,
	correct,
}) => (
	<Result
		icon={<SmileOutlined />}
		title={
			all === 0
				? 'You have not done any tests yet!'
				: 'Great, you have done all the tests!'
		}
		subTitle={`Overall ${correct} / ${all}`}
	/>
);

export default memo(Review);
