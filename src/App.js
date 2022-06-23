import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Slider from 'react-slick';
function App() {
  return (
    <div className="App">
      <Slider/>
      {/* <Header/>
      <Navbar/>
      <Home/> */}
    </div>
  );
}

export default App;
