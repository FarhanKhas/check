import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUpChange = () => {
    let txt = text.toUpperCase();
    setText(txt);
    props.showAlert("Text convert into uppercase", "success")
  };

  const handleLowChange = () => {
    let txt = text.toLowerCase();
    setText(txt);
    props.showAlert("Text convert into Lowercase", "success")
  };

  const handleClearChange = () => {
    setText('');
    props.showAlert("Text is cleared", "success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success")
  };

  const handleCut = () => {
    // Copy the text to clipboard
    handleCopy();
    // Clear the text after copying
    handleClearChange();
    props.showAlert("Your text is cut", "success")
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((copiedText) => {
      setText(copiedText);
      handleCopy();
      props.showAlert("Text Paste", "success")
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container mx-2' style={{ color: props.mode === 'light' ? '#30343F' : 'white' }}>
        <h1>{props.heading}</h1>

        <div className="mb-8">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#30343F', color: props.mode === 'light' ? '#30343F' : 'white' }} id="myBox" rows="7"></textarea>
        </div>

        <button className='btn btn-primary my-4 mx-2' onClick={handleUpChange}>CONVERT TO UPPERCASE</button>
        <button className='btn btn-primary mx-2' onClick={handleLowChange}>CONVERT TO LOWERCASE</button>
        <button className='btn btn-primary mx-2' onClick={handleClearChange}>TEXT CLEAR</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>TEXT COPY</button>
        <button className='btn btn-primary mx-2' onClick={handleCut}>TEXT CUT</button>
        <button className='btn btn-primary mx-2' onClick={handlePaste}>TEXT PASTE</button>
      </div>
      <div className='container my-5' style={{ color: props.mode === 'light' ? '#30343F' : 'white' }}>
        <h1> Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Character </p>
        {/* <p>{spaceRemove.wordCount} Words and {text.length} Character </p> */}
        <h3> Preview</h3>
        <p> {text}</p>
      </div>
    </>
  );
}

// import React, { useState } from 'react';

// export default function Textform(props) {
//   const [text, setText] = useState('Enter Text here');
//   const [isQ, setIsQ] = useState(false);

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//     // Check if the last character is a question mark
//     if (event.target.value.trim().endsWith('?')) {
//       setIsQ(true);
//     } else {
//       setIsQ(false);
//     }
//   };

//   return (
//     <>
//       <div className='container'>
//         <h1>{props.heading}</h1>
//         <div className="mb-8">
//           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
//         </div>
//       </div>
//       <div className="container">
//         <h1>Text Summary</h1>
//         <p>{text.split(" ").length} Words and {text.length} Character </p>
//         <p style={{ color: isQ ? 'red' : 'green' }}> {text} </p>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react';

// export default function Textform(props) {
//   const [text, setText] = useState('Enter Text here');
//   const [isQ, setIsQ] = useState(false);

//   const handleUpChange = () => {
//     // Check if the last character is a question mark
//     if (text.trim().endsWith('?')) {
//       setIsQ(true);
//     } else {
//       setIsQ(false);
//     }
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//     setIsQ(false); // Reset isQ state on text change
//   };

//   return (
//     <>
//       <div className='container'>
//         <h1>{props.heading}</h1>
//         <div className="mb-8">
//           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
//         </div>
//         <button className='btn btn-primary' onClick={handleUpChange}>Click to Check Text</button>
//       </div>
//       <div className="container">
//         <h1>Text Summary</h1>
//         <p>{text.split(" ").length} Words and {text.length} Characters </p>
//         <p style={{ color: isQ ? 'red' : 'green' }}> {text} </p>
//       </div>
//     </>
//   );
// }




