import React from "react"

const Input = ({ message, handleChange, sendMessage, }) => {
    
    
    return (
        <form className="send-message-form">
            <input 
            className="message-input"
            type="text"
            placeholder="Enter message..."
            value={message}
            onChange={(e) => handleChange(e)}
            />
            <button className="send-message-button" onClick={(e) => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input