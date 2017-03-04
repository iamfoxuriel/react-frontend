import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './config/root/index';
import '../ui/less/index.less';


const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

ReactDOM.render(
    <Root />,
    document.getElementById('root'),
    () => {
        console.log('Initial done');
    }
);
