import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello World！{this.props.name}</h1>;
  }
});
ReactDOM.render(
  <div>
    <HelloMessage name="高聪" />
  </div>
  ,
  document.getElementById('root')
);