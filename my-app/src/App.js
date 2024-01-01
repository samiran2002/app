import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState("Dark")
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText("Dark");
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      setBtnText("Light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")

    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 950);
  }
  return (
    <>
     <Router>
      <Navbar title="Samii" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <div className="container my-5 ">
        <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter the text to Analyse" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}
export default App;