import { useState } from "react";
import About from "./components/About"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert]=useState(null)

  const showAlert = (masssage, type)=>{
    setAlert({
      msg: masssage,
      type:type
    })

    setTimeout(() => {
      setAlert(null);

    },1500);
  }
  
  const togglemode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#30343F';
      showAlert("Dark mode has been enabled", "success")
      
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    
    }
  }

// const [mode, setMode] = useState('light') 
  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={togglemode}/>
    {/* <Navbar mainImg={LogoImage} /> */}
    
    <Alert alert={alert}/>
    
    <div className="container">
    <Textform showAlert={showAlert} heading = "Enter your text below" mode={mode}/>
    </div>
    <About mode={mode} />
    
    
    </>
  )
}

export default App;
