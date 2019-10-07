import React from 'react';
import SearchAppBar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <SearchAppBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
