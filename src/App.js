import React from 'react';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import NavbarMenu from "./components/Navbarmenu";
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavbarMenu />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
