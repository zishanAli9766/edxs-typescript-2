import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AstroidUsers from './AstroidId_Nasa/AstroidUsers';
import RandomeUser from './AstroidId_Nasa/RandomeUser';
import Navbars from './Compo/Navbars';
import About from './pages/about';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Home from './pages/home';
import SearchData from './Searchs/SearchData';
import Todo from './Todo/Todo';

function App() {
  return (
    <div className="App">
     <Navbars />
     <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <SearchData />
      {/* <Todo /> */}
    
      
    </div>
  );
}

export default App;
