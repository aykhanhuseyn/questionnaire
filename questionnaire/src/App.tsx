import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';
import { useAuth } from '@store/auth';
import { AuthLayout, StudentLayout } from '@app/components/Layout';
import { randomQuestions } from '@app/utils/randomQuestions';

const LoginPage = loadable(() => import('./pages/Auth/Login'), {
	fallback: <div className='loading' />,
});
const Questionnaire = loadable(() => import('./pages/Main/Questionnaire'), {
	fallback: <div className='loading' />,
});
const Result = loadable(() => import('./pages/Main/Result'), {
	fallback: <div className='loading' />,
});

function App() {
	const { user } = useAuth();

	if (!user)
		return (
			<Routes>
				<Route path='*' element={<AuthLayout />}>
					<Route path='login' element={<LoginPage />} />
					<Route path='*' element={<Navigate to='login' />} />
				</Route>
			</Routes>
		);

	// TODO: chech if user is admin ? adminLayout : studentLayout
	return (
		<Routes>
			<Route path='*' element={<StudentLayout />}>
				<Route path='questionnaire' element={<Questionnaire />} />
				<Route
					path='review'
					element={<Result />}
					errorElement={<div>No Result Available!</div>}
				/>
				<Route
					path='*'
					element={
						<Navigate to='questionnaire' state={{ id: randomQuestions[0].id }} />
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
