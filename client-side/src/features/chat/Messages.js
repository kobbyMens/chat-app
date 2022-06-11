import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import Message  from './Message';


const Messages = ({ messages, name }) => {

 const renderedMessages = messages.map((message, i) => {
     return (
         <div key={i}><Message message={message} name={name}/></div>
     )
 }) 


return (
<ScrollToBottom className="messages">
    {renderedMessages}
</ScrollToBottom>
)
}

export default Messages