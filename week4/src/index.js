import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
// import HelloComponent from './components/HelloComponent';
// import Login from './components/Login';
import BlogPost from "./container/BlogPost/BlogPost";

// const HelloComponent = () => {
//   return HelloComponent}

// class StateFullComponent extends React.Component{
//   render() {
//     return <p>StateFullComponent</p>
//   }
// }

ReactDOM.render(<BlogPost />,document.getElementById('content'));

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();