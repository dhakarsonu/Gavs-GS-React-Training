// import './App.css';
// import AppHeader from './Components/AppHeader';
// import AppBody from './Components/AppBody';

// function App(props) {
//   return (
//     <div className="App">
//       <AppHeader headerText={props.header} />
//       {
//         [
//           props.showBody ? <AppBody /> : null
//         ]
//       }
      
//     </div>
//   );
// }

// export default App;


import { PropTypes } from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

const App = ({ store, history }) => (
  <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default App;

