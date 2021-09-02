import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [myAlert,setMyAlert]=useState(null);
  const [themeId, setThemeId] = useState(0);
  let theme={idx:themeId,colors:[{color:"rgb(255,193,7)",name:"Golden"},{color:"rgb(255,7,76)",name:"Lady Pink"},{color:"rgb(0,255,31)",name:"Lime Green"},{color:"rgb(0,149,255)",name:"Aqua"}]};
  let themeIdx=theme.idx;
  let color=theme.colors[themeIdx].color;
  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#131313';
      showAlert('success','Dark mode enabled');
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor=color;
      showAlert('success','Light mode enabled');
    } 
  }
  const showAlert=(type,message)=>{
    setMyAlert({type:type,message:message});
    setTimeout(()=>{setMyAlert(null)},1500);
  };
    return ( 
      <>
      <Router>
        {/* <div style={{'backgroundColor':'#ffc107','height':'100vh'}}></div> */}
        <Helmet bodyAttributes={{style: `background-color : ${mode==='light'?color:'#131313'}`}}/>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} theme={theme} setThemeId={setThemeId}/>
        {/* <Navbar title={3}/> */}
        {/* <Navbar title="TextUtils" aboutText="About"/> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode} theme={theme}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} theme={theme} setTheme={setThemeId}/>
            </Route>
          </Switch>
        </div>
        <div className="container">
          <Alert alert={myAlert}/>
        </div>
        </Router>
      </>
    );
}

export default App;