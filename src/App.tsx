import React from 'react';
// import Button from 'antd/lib/button';
import {Button} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));

import AboutPage from './pages/AboutPage/AboutPage'


const App = () => {
  return (
    <>
      <h2>
        Header
      </h2>
      <Router>       
          <Route path="/" exact component={AboutPage} />
      </Router>
    </>
  );
}


export default App;