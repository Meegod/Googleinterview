import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <Body/>
      <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
