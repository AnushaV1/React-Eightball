import React, {useState} from "react";
import "./EightBall.css";

const choice = (arr) => {
    const randomId = Math.floor(Math.random() * arr.length);
    return arr[randomId];
}

const EightBall = (props) => {
    const [msg, setMessage] = useState("Think of a question");
    const [color, setColor] = useState("black");
    const handleClick = () => {
        const {msg, color} = choice(props.answers);
        setMessage(msg);
        setColor(color);
    }  
    const reset =() => {
        setMessage("Think of a question");
        setColor("black");
    }  
    return(
        <>
        <h1>Magic Eightball</h1>
			<h2>Click anywhere on the ball to get a prediction</h2>
        <div className="EightBall" onClick={handleClick} style={{backgroundColor:color}}>
            <b>{msg}</b>
        </div>
        <button className="reset-btn" onClick={reset}>Reset</button>
        </>
    );
}

EightBall.defaultProps = {
answers : [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]
};

export default EightBall;