import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import type { UILoginUser } from '@app/models/interfaces';
import { useAppDispatch, login, useUser } from '@app/redux';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const user = useUser();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onFinish = (user: UILoginUser) => {
		dispatch(login(user));
	};

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user]);

	return (
		<Form
			name='login'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			autoComplete='off'
		>
			<Form.Item
				label='Username'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name='remember'
				valuePropName='checked'
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Login;
