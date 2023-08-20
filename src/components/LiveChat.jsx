import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMessage } from "../utils/helper";
//mock api polling

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const name = generateRandomName();

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      //api polling
      // console.log("api polling")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(9),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="ml-2  w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>

      <form className="w-full  p-2 ml-2 border border-black" onSubmit={(e)=>{
         e.preventDefault()
         console.log("submit", liveMessage);
         setLiveMessage("")
         dispatch(addMessage({
            name: "Akshay",
            message: liveMessage
         }))
      }}>
        <input
          className="px-2 w-[400px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
        />
        <button className="pl-7 px-6 mx-2 bg-green-100"> Send </button>
      </form>
    </>
  );
};

export default LiveChat;
