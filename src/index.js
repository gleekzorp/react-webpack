import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
        <h1>It works!</h1>
        <Home />
        <About name="Daniel"/>
        <Contact />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));