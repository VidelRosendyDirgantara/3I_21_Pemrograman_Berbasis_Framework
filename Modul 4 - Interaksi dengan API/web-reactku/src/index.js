import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import BlogPost from "./container/BlogPost/BlogPost";
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Hello = () => {
//   return <p>Hello</p>
// }


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function HelloComponent() {
//   return <p>HelloComponent</p>
// }

// const HelloComponent = () => {
//   return <p>HelloComponent</p>
// }

// class StateFullComponent extends React.Component{
//   render() {
//     return<p>StateFullComponent</p>
//   }
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
// ReactDOM.render(<Test />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
ReactDOM.render(<BlogPost />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
