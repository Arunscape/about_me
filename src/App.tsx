import React from 'react';
// import Button from 'antd/lib/button';
import {Button} from 'antd'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <>
      <h2>
        Header
      </h2>
      <Router>       
          <Route path="/" exact component={Index} />
          <Route path="/products/:id" component={Product} />
      </Router>
    </>
  );
}


const Index = () => <> <p>hello</p> </>
const Product = () => <> <p>product</p> </>
export default App;