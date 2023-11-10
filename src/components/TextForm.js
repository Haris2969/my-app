import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [bold , setBold] = useState('');

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handledownClick =() =>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =() =>{
        let newText= "";
        setText(newText);
    }
    const handleBoldClick =() =>{
        setBold(!bold);
    }
    const handleOnChange = (event) =>{
        // console.log("onChange");
        setText(event.target.value);
    }
  return (
    <>
    <div className='conatiner'> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={bold? {fontWeight:'bold'}:{}}></textarea>
    </div>
    <button className="btn btn-primary p-2 m-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary p-2 m-1" onClick={handledownClick}>Convert to Lowercase</button>
    <button className="btn btn-primary p-2 m-1" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary p-2 m-1" onClick={handleBoldClick}>Bold</button>
    </div>
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>Total Words : {text.split("").length}</p>
        <p>Total Characters : {text.length}</p>
        <p>Total Time to read : {0.008 * text.split(" ").length }</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
