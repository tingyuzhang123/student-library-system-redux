import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './bookSystem/store';
import { Provider } from 'react-redux';
import SL from './StudentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
          <SL />
        </Provider>
      </header>
    </div>
  );
}

export default App;
