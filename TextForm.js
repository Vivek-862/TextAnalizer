import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       console.log("Uppercase was clicked "+ text)
       let newText = text.toUpperCase();
       setText(newText) 
    }

    const handleLoClick = () =>{
      console.log("Uppercase was clicked "+ text)
      let newText = text.toLowerCase();
      setText(newText) 
   }
   const handleClearClick = () =>{
    console.log("Uppercase was clicked "+ text)
    let newText = ' ';
    setText(newText) 
 }
 const handleExtraSpace = () =>{
 // console.log("Uppercase was clicked "+ text)
  let newText = text.split(/[ ]+/);
  setText(newText.join(" ")) 
}
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value); 
     }
    const [text,setText]= useState('Enter text here 2');
       
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}  rows="8"></textarea>
</div>
    <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra Space</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>
       No. of  Words= {text.split(" ").length} and Characters={text.length } 
      </p>
      <p>{0.008*text.split(" ").length } Minutes requires to read the text !</p>
    </div>
    </>
  )
}
