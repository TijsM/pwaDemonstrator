import React, {useEffect, useState} from "react";

const A2HS = () => {

 const [prompt, setPrompt] = useState();
  
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      console.log("before install prompt fired");
     
      setPrompt(event)
    });
  }, [])

  
  const install = () => {
    console.log('clicked')
    if(prompt){
      prompt.prompt();
    }
    else{
      console.log('installing is not supported')
    }
  }


  return (
    <div className="container">
      <h1>Add to homescreen</h1>
      <div className="headerCaption">
        You can add PWA's to your home screen. They look just like regular
        native apps.
      </div>

      <button
      className="funcButton"
      onClick={install}>
        install
      </button>
    </div>
  );
};

export default A2HS;
