import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//IMPORT DAS PAGINAS DA APLICAÇÃO
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Avaliar from './pages/Avaliar/Avaliar'
import Glossario from './pages/Glossario/Glossario'
import Login from './pages/Login/login'


function App() {
  return (
   //ROTAS DA APLICAÇÃO
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Avaliar" element={<Avaliar />} />
        <Route path="/Glossario" element={<Glossario />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
   </Router>
  );
}

export default App;