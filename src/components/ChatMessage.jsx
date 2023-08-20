import React from 'react'
import logo from "../assests/user-icon.jpg";

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm py-2'>
      <img className="h-6 mx-2" alt="app-icon" src={logo} />
     <span className='font-bold pl-1 pr-4'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default ChatMessage
