import React, { useState } from "react";
import "./task8.css"


var likecounter = 0
export default function App(){
    const [meaning, setmeaning] = useState("")


    function emojiinputhandler(event) {
        var userinput = event.target.value;
        var meaning = emojidirectory[userinput]
        likecounter = likecounter+1
        if (meaning===undefined){
            meaning = "we dont have this in our database"
        }
        setmeaning(meaning)
    }

    console.log("clicked", likecounter);


    return(
        <div className="App">
            <h1>inside outt</h1>
            <button onChange={outputchangekHandler}> like Me! </button>
        </div>
    )

}