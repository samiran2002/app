import React, { useState } from 'react'
export default function TextForm(props) {
    // use of state and hooks
    const [text, setText] = useState('');
    // converting to uppercase
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared !!","success")

    }
    // to enable writing inside textbox
    const handleChange = (event) => {
        setText(event.target.value) //to set new text 
    }
    
    // copy
    const handleCopyClick = ()=>{
        const copyText = document.getElementById("textBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        try{
        navigator.clipboard.writeText(copyText.value);
        }
        catch(err){
            console.error('failed to copy')
        }
        props.showAlert("Copied to Clipboard !!","success")

    }
    
    
    
    
    // const [myStyle,setMyStyle] = useState({
    //     color : 'black',
    //     background : 'white'
    // })
    // const [btnText,setBtnText] = useState("Dark Mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle ({
    //             color : 'white',
    //             background : '#212529',
    //         })
    //         setBtnText("Dark Mode");
    //     }
    //     else {
    //         setMyStyle ({
    //             color : 'black',
    //             background : 'white'
                
    //         })
    //         setBtnText("Light Mode");
    //     }
    // }



    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                {/* <div className="form-check form-switch">
                    <input className="form-check-input my-3 " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle}/>
                    <label className="form-check-label my-3  " htmlfor="flexSwitchCheckDefault">{btnText}</label>
                </div> */}
                <div className="mb-3">
                    <textarea className="form-control my-5 " value={text} onChange={handleChange} id="textBox" rows="7" style={{backgroundColor:props.mode==='light'?'white':'#212529', color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-2 mb-3`} onClick={handleClick}>Convert to UpperCase</button>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-2 mb-3`} onClick={handleLowClick}>Convert to LowerrCase</button>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-2 mb-3`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 my-2 mb-3`} onClick={handleClearClick}>Clear</button>


            </div>
            <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length}  Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} minutes is required to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the text box"}</p>
            </div>
        </>

    )
}