import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import store from './redux';
import App from './App';
import './index.css';

const theme: Parameters<typeof ConfigProvider>[0]['theme'] = {
	token: {
		colorPrimary: '#288e63',
	},
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ConfigProvider theme={theme}>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ConfigProvider>,
);
