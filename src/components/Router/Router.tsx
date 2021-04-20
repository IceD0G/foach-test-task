import { BrowserRouter as Router } from 'react-router-dom';
import Auth from '../Auth/Auth';
import App from '../App/App';
import { observer } from 'mobx-react-lite';
import AuthStore from '../../store/auth';
import { useEffect } from 'react';

const MainRouter = observer(() => {
	useEffect(() => {
		AuthStore.init();
	}, []);

	return (
		<Router>
			{AuthStore.auth ? <App /> : <Auth />}
		</Router>
	);
});

export default MainRouter;
