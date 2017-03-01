import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import SMBO from './smbo';
import '../ui/less/index.less';


// prepare render container
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

ReactDOM.render(
    <SMBO />,
    document.getElementById('root'),
    () => { console.log('Initial done'); }
);
