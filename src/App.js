import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FlipMove from 'react-flip-move';
import db from './firebase'
import firebase from 'firebase'
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => (
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    ))
  },[])

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })  
  };
  return (
    <>
      <div className="App">
        <img
          className="messenger_logo"
          src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
        />
        <h1>iChat </h1>
        <h2 style={{ textTransform: "capitalize" }}>Welcome {username}</h2>

<form className='app__form'>
        <FormControl className='app__formcontrol'>
          <InputLabel>Type Message....</InputLabel>
          <Input
            value={input}
            className='app__input'
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            disabled={input === ""}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendRoundedIcon/>
          </Button>
        </FormControl>
        </form>
     <FlipMove>
        {messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))}
        </FlipMove>
      </div>
    </>
  );
};

export default App;
