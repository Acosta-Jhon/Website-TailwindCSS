import React from 'react';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Tables from './components/Tables';

const App = () => {
  return (
    <div className="bg-gray-800 h-full text-gray-300 font-medium">
      <Header/>
      <Carrousel/>
      <Tables/>
      <Footer/>
    </div>
  );
}

export default App;
