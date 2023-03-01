import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlelowClick=()=>{
       
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleCpClick=()=>{
       const arr=text.split(" ");
       for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
       }
       let newText=arr.join(" ");
   
    setText(newText);
}
  const handleclrClick=()=>{
       
    let newText='';
    setText(newText);
}
    const handleOnChange=(event)=>{
      // console.log("onchagne");
      setText(event.target.value);
  }
    const[text,setText]=useState('Enter Text here');
  return (
    <>

    <div className="container">
   <h1>{props.heading}</h1>
  <div className="mb-3">

<textarea className="form-control"value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleCpClick}>Capitalized Case</button>
  <button className="btn btn-primary mx-2" onClick={handleclrClick}>Clear</button>
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length-1}->Words and {text.length}->Characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
