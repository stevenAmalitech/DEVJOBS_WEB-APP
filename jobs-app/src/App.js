import './App.css';
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './components/Navigation.css';



class App extends Component {
  render () {
    return( 
    <div className="container-fluid position-relative">
      <Navigation />

     </div>
     );
   
  
    }
}


export default App;
