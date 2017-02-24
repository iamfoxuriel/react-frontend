import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import '../ui/less/index.less';


// prepare render container
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

ReactDOM.render(
  <h1 className="red">Hello SMBO!</h1>,
  document.getElementById('root'),
  () => { console.log('Initial done'); }
);
