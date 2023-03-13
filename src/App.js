
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextFrom from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  let[mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
let showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },3000);
}
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#1a345c';
    showAlert("Dark mode has been Enabled","success");
    }else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
    }
  }
  return (
    <>
    <Router>
  <Navbar title="Text_Utils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3">
 <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextFrom showAlert={showAlert} heading="Enter the text to Convert below"  mode={mode}/>
          </Route>
        </Switch>
 
 
 </div>
 </Router>
  </>
  );
}

export default App;
