import React from 'react';
import { Route,Routes  } from "react-router-dom";
import routerList from './Main/router'

// import Login from './component/login'
import './App.css';

function App() {
  return (
       <Routes>
          {
            routerList.map(({path, component, exact = true}, key) => {
                return (<Route
                          exact={exact}
                          key={key}
                          path={path}
                          element={component}
                        />)
            })
          }

      </Routes>
  );
}

export default App;
