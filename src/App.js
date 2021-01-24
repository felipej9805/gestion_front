import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/gestion_front' exact component={Home}/>
            <Route path='/gestion_front/reports' component={Reports}/>
            <Route path='/gestion_front/products' component={Products}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
