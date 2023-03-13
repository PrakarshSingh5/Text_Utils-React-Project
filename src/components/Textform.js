import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handlelowClick=()=>{
       
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowerCase!","success");
  }
  const handleexspClick=()=>{
       
    let newText=text.split(/[ ]+/);
    setText(newText.join(" ")) 
    props.showAlert("Spaces are removed!","success");
}
  const handleCopyClick=()=>{
       var text=document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text is Copied!","success");
}
  const handleCpClick=()=>{
       const arr=text.split(" ");
       for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
       }
       let newText=arr.join(" ");
   
    setText(newText);
    props.showAlert("Text is Capatalized!","success");
}
  const handleclrClick=()=>{
       
    let newText='';
    setText(newText);
    props.showAlert("Text is Cleared!","success");
}
    const handleOnChange=(event)=>{
      // console.log("onchagne");
      setText(event.target.value);
  }
    const[text,setText]=useState('');
  return (
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'#1a345c'}}>
   <h1 >{props.heading}</h1>
  <div className="mb-3">

<textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#639ccf':'white',color:props.mode==='dark'?'white':'#1a345c'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleCpClick}>Capitalized Case</button>
  <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleexspClick}>Remove Extra Space</button>
  <button className="btn btn-primary mx-2" onClick={handleclrClick}>Clear Text</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#1a345c'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox"}</p>
  </div>
  </>
  )
}
