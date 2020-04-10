import React from "react";
import swal from 'sweetalert'

import "./Clipboard.scss";
import "../Home/Home.scss";

const Clipboard = () => {
  const copyUrl = () => {
    navigator.clipboard
      .writeText("https://pwademonstrator.netlify.com/")
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        // This can happen if the user denies clipboard permissions:
        console.error("Could not copy text: ", err);
      });

      swal("coppied!", "We have coppied the URL of this website to your clipboard, please go share it with your friends 😉", "success");

    // alert("Great! now you can share this link with your friends 😉");
  };

  const pasteClipboard = () => {

    navigator.clipboard
      .readText()
      .then((text) => {
        console.log("Pasted content: ", text);

        swal("Be carefull with sensitive data bud, webapps can read your clipboard 😉","last coppied item: "+ text, "warning");
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  return (
    <div>
      <h1>Clipboard</h1>
      <div className="headerCaption">
        You can read an write from the system's Clipboard
      </div>

      <div className="content">
        click the button to copy this URL to your clipboard.
        <button className="funcButton" onClick={copyUrl}>
          coppy
        </button>
      </div>

      <div className="content">
       show the last item i've coppied
        <button className="funcButton" onClick={pasteClipboard}>
          paste
        </button>
      </div>
      
    </div>
    
  );
};

export default Clipboard;
