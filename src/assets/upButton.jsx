import React from "react";

const ScrollToTop =() => {
    window.scrollTo({top:0, behavior:"smooth"})
}

function UpButton (){
    return (
        <button onClick={ScrollToTop} className="scroll-button"><img src="./up.png" alt="scroll to top button" /></button>
    )
}

export default UpButton