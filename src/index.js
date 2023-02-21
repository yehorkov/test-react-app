import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';
import { Button } from './App';
import BootstrapTest from './BootstrapTest';
// import { Header } from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

// const text = 'Hello World!';

// const elem = (
//     <div>
//         <h2 className='text'>Текст: {text}</h2>
//         <input type="text" />
//         <label htmlFor=""></label>
//         <button tabIndex={0}>Click</button>
//     </div>
// )

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
	<App/>
	<BigButton as='a'>Отправить отчет</BigButton>
	<BootstrapTest/>
  </StrictMode>
);
