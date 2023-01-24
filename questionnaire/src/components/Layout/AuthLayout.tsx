import { memo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
	return (
		<Layout
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Outlet />
		</Layout>
	);
};

export default memo(LoginPage);
