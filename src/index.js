import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from './components/Menu/Menu';
import Books from './components/Books/Books'
import Comments from './components/AddComments/Comments'
import CommentAdd from './components/AddComments/CommentsAdd'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/comment_add" element={<CommentAdd/>} />
        <Route path="/character" element={<Comments/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// reportWebVitals();
