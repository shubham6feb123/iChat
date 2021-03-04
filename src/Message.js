import React, { forwardRef } from "react";
import { Card, CardContent, Typography,Chip } from "@material-ui/core";
import './Message.css';

const Message = forwardRef(({message,username},ref)=>{
  const isUser = username === message.username;
  return (
    <>
    <div ref={ref} className={`message ${isUser===true?'message__user':''}`}>
   {isUser?'':<Chip size="small" label={!isUser&&`${message.username||'Unknown User'}`} className='chip'/>}
      <Card className={` ${isUser===true?'message__usercard':'message__guestcard'}`}>
        <CardContent className='message__cardContent'>
          <Typography color="white" variant="h6" component="h6">
           {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </>
  );
});
// {message.username} : 
export default Message;
