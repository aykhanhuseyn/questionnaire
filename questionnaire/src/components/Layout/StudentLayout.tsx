import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { Layout, Menu, theme, Image } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { getMenuItems } from '@app/utils/getMenuItems';
import { randomQuestions } from '@app/utils/randomQuestions';
import './style.css';

const { Header, Content, Sider } = Layout;

const StudentLayout: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();
	const menuItems = useMemo(() => getMenuItems(navigate), []);

	return (
		<Layout>
			<Header className='header'>
				<Image src='logo.png' height={40} />
			</Header>
			<Layout>
				<Sider width={200} style={{ background: colorBgContainer }}>
					<Menu
						mode='inline'
						style={{ height: '100%', borderRight: 1 }}
						defaultSelectedKeys={[randomQuestions[0].id]}
						defaultOpenKeys={['questionnaire']}
						items={menuItems}
					/>
				</Sider>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default memo(StudentLayout);
