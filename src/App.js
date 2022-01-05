import React from 'react';
import { Route,Routes  } from "react-router-dom";
import Login from './page/Login'
import Home from './page/Home'
import Notfort from './page/NotFort'
import ProtectRouter from './component/ProtecteRouter'
import './App.css';

function App() {
  return (
       <div>

        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<ProtectRouter><Home /></ProtectRouter>} />
          <Route path='*' element={<Notfort />} />
        </Routes>
      </div>
  );
}

export default App;
