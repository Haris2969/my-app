import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode , setMode] = useState('dark')  //whether dark mode is on
  return (
 <> 
<Navbar title="King 56" mode={mode} />
<div className="container my-3">
<TextForm heading="Enter text to Analyze"/>
{/* <About/> */}
</div>
</>
 );
}

export default App;
