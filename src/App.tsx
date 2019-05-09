import React, { Suspense } from 'react';
// import Button from 'antd/lib/button';
import {Button} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { tsExpressionWithTypeArguments } from '@babel/types';


const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const Header = React.lazy(()=> import('./components/Header/Header'));

// import AboutPage from './pages/AboutPage/AboutPage'

const externalRedirect = (path:string, url:string) => (
  <Route path={path} exact component={()=>{
    window.location.replace(url);
    return null
  }}/>
);

const redirectRoutes = [
  ["/github", "https://github.com/Arunscape"],
  ["/linkedin", "https://linkedin.com/in/arunwoosaree"],
  ["/email", "mailto:arun@woosaree.xyz"],
  ["/resume", "https://github.com/Arunscape"],
]

const test = (x:string) => <div>{x}</div>
const idk = [
  ["/a", "google.ca"],
  ["/b", "gmail.com"],
  ["/c", "youtube.com"],
]

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>>
      <Router>       
          <Route path="/" exact component={AboutPage} />
          <Route path="/resume" exact component={()=><div>TODO</div>}/>
          {redirectRoutes.map((x)=>externalRedirect(x[0],x[1]))}
      </Router>
    </Suspense>
  );
}


export default App;