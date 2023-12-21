import React from 'react';
import './App.css';
import DateHeader from './components/DateHeader';
import Dashboards from './components/Dashboards';


function App() {
  return (
    <div className="App">
      <div className="DateHeader">
        <DateHeader />
      </div>
      <div className="Dashboards">
        <Dashboards></Dashboards>
      </div>
    </div>
  );
}

export default App;
