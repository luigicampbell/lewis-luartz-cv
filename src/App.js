import React from 'react';
import SearchAppBar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <SearchAppBar />
      <Home />
    </div>
  );
}

export default App;
