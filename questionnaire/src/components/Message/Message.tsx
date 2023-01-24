import { Tag } from 'antd';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

export const Message = () => {
	const methods = useFormContext();
	const { state } = useLocation();

	if (!methods.formState.isSubmitted) {
		return null;
	}

	if (!methods.formState.errors?.[state.id]) {
		return (
			<Tag
				icon={<CheckCircleOutlined />}
				style={{ marginTop: '1rem' }}
				color='success'
			>
				Congrats! You did it!
			</Tag>
		);
	}

	return (
		<Tag
			icon={<CloseCircleOutlined />}
			style={{ marginTop: '1rem' }}
			color='error'
		>
			{((methods.formState.errors?.[state.id] as unknown as FieldError[])?.at?.(0)
				?.message as ReactNode) ||
				(methods.formState.errors?.[state.id]?.message as ReactNode)}
		</Tag>
	);
};
