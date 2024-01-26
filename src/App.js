import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeComponent from './components/Home/Home.component';
import CicloDeVida from './components/CicloDeVida/CicloDeVida';
import HookComponent from './components/Hook/HookComponent';
import CustomHooks from './components/CustomHooks/CustomHooks';
import HocComponent from './components/Hoc/HocComponent';
import EventLoopComponent from './components/EventLoop/EventLoopComponent';
import ClosuresComponent from './components/Closures/ClosuresComponent';
import ContextComponent from './components/Context/ContextComponent';
import IFFEComponent from './components/IFFE/IFFEComponent';
import VariableComponent from './components/Variables/VariableComponent';
import TDZJs from './components/TDZ-js/TDZJs';



function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/ciclodevida" element={<CicloDeVida />} />
          <Route path="/hooks" element={<HookComponent />} />
          <Route path="/customsHooks" element={<CustomHooks />} />
          <Route path="/HoC" element={<HocComponent />} />
          <Route path="/evenLoop" element={<EventLoopComponent />} />
          <Route path="/closures" element={<ClosuresComponent />} />
          <Route path="/context" element={<ContextComponent />} />
          <Route path="/iffe" element={<IFFEComponent />} />
          <Route path="/const-let-var" element={<VariableComponent />} />
          <Route path="/tdz-js" element={<TDZJs />} />



        </Routes>
    </Router>
  );
}

export default App;
