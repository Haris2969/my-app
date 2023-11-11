import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
 <> 
<Navbar title="King 56" aboutUs = "About King 56"/>
<div className="container my-3">
<TextForm heading="Enter text to Analyze"/>
{/* <About/> */}
</div>
</>
 );
}

export default App;
