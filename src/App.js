import BooksComment from './components/Books/BooksComment'

import  { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


// import Sidebar from './components/SideBar/SideBar';


// import './App.css';

// const axios = require('axios').default;

class App extends Component {
   
    render(){
      return (
        <div>
            {/* <Sidebar /> */}
            <BooksComment />
        </div>
      );
  }
}

export default App;
