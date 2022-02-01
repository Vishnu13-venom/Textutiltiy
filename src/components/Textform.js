import React, {useState} from "react";


export default function Textform(props) {
  const Handleupclick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    props.showAlert("Convert to Uppercase","Sucess");
    setText(newtext)
  }
  const Handleloclick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    props.showAlert("Convert to Lowercase" ,"Sucess");
    setText(newtext)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const HandleExtraSpaces = ()=>{
    let newtext = text.replace(/\s+/g, ' ').trim();
    setText(newtext)
    }
    const HandleCleartext = ()=>{
      let newtext = '';
      setText(newtext)
      }
  const [text,setText] = useState("");
    return(
      <>
      <div className="container" style= {{color : props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-7">
      <textarea className="form-control my-2" value = {text} onChange ={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#042743':'white', color: props.mode ==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-success mx-1"on onClick={Handleupclick}>Convert to Uppercase</button>  
      <button className="btn btn-success mx-1"on onClick={Handleloclick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1"on onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-success mx-1"on onClick={HandleCleartext}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color : props.mode ==='dark'?'white':'black'}}>
        <h1>
          Your Text Summary
        </h1>
        <p1>
          Words {text.split(" ").length} and {text.length} Characters </p1>
          <p>Words {0.08*text.split(" ").length} and Minutes Read</p>
        <h2>Preview</h2>
         <textarea className="form-control" value = {text} style={{backgroundColor : props.mode ==='dark'?'#042743':'white',color: props.mode ==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>

      </>
    );
}