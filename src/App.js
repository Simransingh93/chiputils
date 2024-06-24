import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type )=>{
setAlert(
  {
    msg: message,
    type: type
  }
)
setTimeout( ()=> {
  setAlert(null);}, 1000);
  }

  


const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark') 
    document.body.style.backgroundColor ='#40126a';
    showAlert("Dark Mode Enabled", "success");
    document.title = "Chip Utils - Dark Mode Activated"
  
}
else{
setMode('light')
document.body.style.backgroundColor ='white';
showAlert("Dark Mode Disabled", "success");
document.title = "Chip Utils - Light Mode Activated"
// setInterval(() => {

//   document.title = "Light Mode Activated";}, 1000);

//   setInterval(() => {

//     document.title = "Light UI Activated";}, 1000);
}
}
  return (
    <>
    {/* <Navbar title="GizmoChina" news="News" reviews="Reviews" deals="Deals" products="Products" phones="Phones" guides="Guides" how="How" shop="Shop"/> */}
    {/* <Router> */}
    <Navbar title="Chip Utils" aboutText="About" reviews="Reviews" deals="Deals" products="Products" phones="Phones" how="How" shop="Shop" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container">
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Add Text to Convert to Uppercase" mode={mode} />}>          </Route> */}
        {/* </Routes> */}
        {/* <About /> */}
        <TextForm showAlert={showAlert} heading="Add Text to Convert to Uppercase" mode={mode} />
</div>
{/* </Router> */}
    </>
  );
}

export default App;
