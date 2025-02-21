
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03102e';
      showAlert("dark mode has been enable","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable","success")
    }
  }

  return (
  <>
    <Router>
    <Navbar Title = "MyTextUtil" AboutText = "About" Mode ={mode} toggleMode = {toggleMode} />
    <Alert Alert = {alert}/> 
    <div className='container my-4'>
      <Routes>
        <Route exact path="/" element={<Home Mode ={mode}/>}/>
        <Route exact path="/home" element={<Textform Heading = "Enter the text to analyze below" Mode ={mode} showAlert = {showAlert} />}  />
        <Route exact path="/about" element={<About Mode ={mode}/>}/>
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
