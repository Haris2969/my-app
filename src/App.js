import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
 <> 
<Navbar title="King 56" aboutUs = "About King 56"/>
<div className="container my-3">
<TextForm heading="Enter text to Analyze"/>
</div>
</>
 );
}

export default App;
