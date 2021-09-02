import React,{useState} from 'react'

export default function TextForm(props) {
    function changeHandler(e){
        setText(e.target.value);
    }
    let upperHandler=()=>{
        setText(text.toUpperCase());
        props.showAlert('success','Upper Case Applied');
    }
    let lowerHandler=()=>{
        setText(text.toLowerCase());
        props.showAlert('success','Lower Case Applied');
    }
    let clearHandler=()=>{
        setText("");
        props.showAlert('success','Text cleared');
    }
    let copyHandler=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('success','Copied to clipboard');
    }
    let pasteHandler=()=>{
        navigator.clipboard.readText().then(copiedText=>{
            setText(text+copiedText);
        })
        props.showAlert('success','Text pasted');
        
        // navigator.clipboard.readText().then(text => copiedText= text);
    }
    let words=(text)=>{
        let arr=text.split(/[ ]+/);
        let idx=arr.findIndex(e=>e==="");
        while(idx!==-1){
            arr.splice(idx,1);
            idx=arr.findIndex(e=>e==="");
        }
        return arr.length;
    }
    // function upperHandler(){
    //     setText(text.toUpperCase());
    // }
    const [text,setText]=useState('');

    let themeIdx=props.theme.idx;
    let color=props.theme.colors[themeIdx].color;

    return (
        <>
        <div className="container">
            <h2 style={{'color':props.mode==='light'?'#4a4a4a':'#ddd'}}>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={changeHandler} style={{'color':props.mode==='light'?'black':color,'backgroundColor':props.mode==='light'?'white':'#1e1e1e','fontSize':'50px'}} id="myBox" rows="6"></textarea>
            </div>
            <button className={`btn mx-1`} style={{'backgroundColor':props.mode==='light'?'white':color}} onClick={upperHandler}>To UpperCase</button>
            <button className={`btn mx-1`} style={{'backgroundColor':props.mode==='light'?'white':color}} onClick={lowerHandler}>To LowerCase</button>
            <button className={`btn mx-1`} style={{'backgroundColor':props.mode==='light'?'white':color}} onClick={clearHandler}>Clear</button>
            <button className={`btn mx-1`} style={{'backgroundColor':props.mode==='light'?'white':color}} onClick={copyHandler}>Copy to Clipboard</button>
            <button className={`btn mx-1`} style={{'backgroundColor':props.mode==='light'?'white':color}} onClick={pasteHandler}>Paste</button>
        </div>
        <div className="container my-3">
            <h3 style={{'color':props.mode==='light'?'#4a4a4a':'#ddd'}}>Your summary here</h3>
            <p style={{'color':props.mode==='light'?'#4a4a4a':'#ddd'}}>{words(text)} words, {text.length} characters</p>
            <p style={{'color':props.mode==='light'?'#4a4a4a':'#ddd'}}>{(0.0016*text.length).toFixed(4)} Minutes total read time</p>
        </div>
        </>
        )
}
