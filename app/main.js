import ReactDOM from 'react-dom';
import React from 'react';
import FilterableProductTable from './components/component.jsx';
import TestFalseObj from './components/example-0530.jsx';
import css from './less/theme.less';

main();

function main () {
    var PRODUCT_CONFIG = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    ReactDOM.render(<FilterableProductTable ordinaryList = {PRODUCT_CONFIG} />, document.getElementById('content'));
    ReactDOM.render(<TestFalseObj />, document.getElementById('contents'));
}
// 'use strict';
// var component = require('./components/productBox.js');
// document.body.appendChild(component());

