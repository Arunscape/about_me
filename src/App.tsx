import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const Header = React.lazy(() => import('./components/Header/Header'));

const externalRedirect = (path: string, url: string) => (
  <Route path={path} exact component={() => {
    window.location.replace(url);
    return null
  }} 
  key={path}
  />
);

const redirectRoutes = [
  ["/github", "https://github.com/Arunscape"],
  ["/linkedin", "https://linkedin.com/in/arun-woosaree"],
  ["/email", "mailto:arun@woosaree.xyz"],
  // ["/resume", "https://github.com/Arunscape"],
]

const App: React.FC =  () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
      <Header />
        <Route path="/" exact component={AboutPage} />
        <Route path="/resume" exact component={() => (<div>TODO</div>)} />
        {redirectRoutes.map((x) => externalRedirect(x[0], x[1]))}
      </Router>
    </Suspense>
  );
}

export default App;