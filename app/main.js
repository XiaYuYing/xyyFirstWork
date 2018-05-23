import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './components/component.jsx';

main();
function main () {
    ReactDOM.render(<Hello />, document.getElementById('content'));
}
// 'use strict';
// var component = require('./components/productBox.js');
// document.body.appendChild(component());

