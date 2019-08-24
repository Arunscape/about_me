import React, { Suspense, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import useDarkMode from './util/useDarkMode';
import { ThemeProvider } from './util/themeContext'
import MaterialThemeWrapper from './components/themeWrapper'


const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const Header = React.lazy(() => import('./components/Header/Header'));
const Resume = React.lazy(() => import('./pages/Resume/Resume'));
const Projects = React.lazy(() => import('./pages/Projects/Projects'));

const externalRedirect = (path: string, url: string) => (
  <Route path={path} exact component={() => {
    window.location.replace(url);
    return null
  }}
    key={path}
  />
);

const redirectRoutes = [
  {
    route: '/github',
    url: 'https://github.com/Arunscape'
  },
  {
    route: '/linkedin',
    url: 'https://linkedin.com/in/arun-woosaree'
  },
  {
    route: '/email',
    url: 'mailto:arun@woosaree.xyz'
  },
]


const App: React.FC = () => {

  const [theme, setTheme] = useState()




  return (
    <ThemeProvider>
      <MaterialThemeWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Router basename="/">
            <Header />
            <Route path="/" exact component={AboutPage} />
            <Route path="/resume" exact component={Resume} />

            <Route path="/projects" exact component={Projects} />
            {redirectRoutes.map((r) => externalRedirect(r.route, r.url))}
          </Router>
        </Suspense >
      </MaterialThemeWrapper>
    </ThemeProvider>
  );
}


export default App;