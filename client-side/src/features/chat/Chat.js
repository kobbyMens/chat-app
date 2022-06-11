import React, {useState, useEffect} from 'react';
import './chat.css'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import io from 'socket.io-client'

//custom components
import  InfoBar  from '../infoBar/InfoBar'
import Input from '../input/Input';
import Messages from './Messages'
let socket


const Chat = () => {
    
    const location = useLocation()
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')  
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
      socket = io(ENDPOINT); 

      const {name, room} = queryString.parse(location.search)
        setName(name)
        setRoom(room)
        socket.emit('join', {name, room}, () => {
        })    

        return () => {
            socket.emit('leave room', { room })
            socket.disconnect()
           
       }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages([...messages, data])
        })
    }, [messages]);

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        socket.emit('sendMessage', {message}, () => setMessage(''))
    }

    console.log(message, messages)
    return (
        <div className="outer-container">
            <div className="container">
                <InfoBar room={room} />
                <Input message={message} handleChange={handleChange} sendMessage={sendMessage} />
                <Messages messages={messages} name={name} />
            </div>
        </div>
    )
}

export default Chat