import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import Header from './components/Header';
import './App.css';


const App = () => (
  <Router>
    <div className="app">
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:articleUrl" element={<ArticlePage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
