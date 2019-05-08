import React, { Suspense } from 'react';
// import Button from 'antd/lib/button';
import {Button} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const Header = React.lazy(()=> import('./components/Header/Header'));

// import AboutPage from './pages/AboutPage/AboutPage'


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>>
      <Router>       
          <Route path="/" exact component={AboutPage} />
      </Router>
    </Suspense>
  );
}


export default App;