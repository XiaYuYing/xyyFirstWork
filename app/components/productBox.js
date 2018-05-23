'use strict';
// var React = require('react');
// var ProductBox = React.createClass({
//   render: function () {
//     return (
//       <div className="productBox">
//         Hello World!
//       </div>
//     );
//   }
// });

// module.exports = ProductBox;
module.exports = function () {
    var element = document.createElement('h1');
    element.innerHTML = 'Hello World1';
    return element;
}
