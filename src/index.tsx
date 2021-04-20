import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainRouter from './components/Router/Router';

ReactDOM.render(
	<React.StrictMode>
		<MainRouter />
	</React.StrictMode>,
	document.getElementById('root'),
);
