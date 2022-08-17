// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App header="Gavs-GS Lab React Training" showBody={true}/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import RedBox from 'redbox-react' // eslint-disable-line
import App from './App';
import store from './store';
import history from './history';
import * as serviceWorker from './serviceWorker';

const ENTRY_POINT = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  ENTRY_POINT.render(
      <React.StrictMode>
        <App store={store} history={history}/>
      </React.StrictMode>
  );
};

const renderError = (error) => {
  ENTRY_POINT.render(
      <RedBox error={error} />
  );
};

const devRender = () => {
  if (module.hot) {
    module.hot.accept('./App.js', () => render());
  }

  render();
};

try {
  devRender();
} catch (error) {
  console.error(error);
  renderError(error);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
