import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const el = "hello world"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function getGreeting(user)
// {
//   if(user){
//     return <h1> Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello , Stranger.</h1>
// }


// function formatName(user){
//   return user.firstName+' '+user.lastName;
// }

// const user = {
//   firstName : 'Harper',
//   lastName : 'Peerz'
// };


// const element = (
//   // <h1>Hi, {formatName(user)}!</h1>
//    getGreeting(user)
// );

// const element1 = (
//   <h1 className = "greeting" > Hello World! </h1>
// );

// const element2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   "Hello World!!"
// );

// // const element3 = {
// //   type : 'h1',
// //   props : {
// //     className :'greeting',
// //     children : 'Hello world!!!'
// //   }
// // };



// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );