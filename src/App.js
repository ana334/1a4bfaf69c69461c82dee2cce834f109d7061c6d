import React from 'react';
import './App.css';
import Header from './components/Header';
import Location from './components/Location';
import Tab from './components/Tab';

function App() {
  return (
    <div className="container">
      <Header/>
      <Location/>
      <Tab/>
    </div>
  );
}

export default App;
