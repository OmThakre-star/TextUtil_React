import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","primary")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }

    const handleCapClick = ()=>{
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText)
        props.showAlert("Capitalize word!","secondary")
    }
    
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!","success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("All Text Clear!","danger")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter the text");
    return (
    <>
    <div className="container" style={{color: props.Mode === 'dark'?'white':'#03102e'}}>
       <div className="mb-3">
            <label htmlFor="myBox" className="form-label"><h1>{props.Heading}</h1></label>
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleCapClick}>CapitalizeCase</button>
        <button className='btn btn-success mx-2' onClick={handleCopyText}>CopyText</button>
        <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3" style={{color: props.Mode === 'dark'?'white':'#03102e'}}>
      <h1>Your Text Summary</h1>
      <p>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words  & {text.length-text.split(" ").length+1} characters</p>
      <p>{0.008 * text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  
  )
}
