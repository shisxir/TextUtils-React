import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () =>{
        console.log("Upper Case button clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const [text, setText] = useState('Enter Text here:');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mnyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Covert to Uppercase</button>
    </div>
  )
}
