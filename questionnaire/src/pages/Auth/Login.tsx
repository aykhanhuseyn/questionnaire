import { Typography, Card } from 'antd';
import { Login } from '@app/components';

const LoginPage = () => {
	return (
		<Card>
			<Typography.Title
				level={2}
				style={{ textAlign: 'center', marginBottom: '2rem' }}
			>
				Login page
			</Typography.Title>
			<Login />
		</Card>
	);
};

export default LoginPage;
