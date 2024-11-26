import React, { useContext, useState } from "react";
import "./SideBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { dataContext } from "../../context/UserContext";

const SideBar = () => {
  const [extend, setExtend] = useState(true);
  const { prevPrompt, send,newChat } = useContext(dataContext);

  async function loadPrev(prompt) {
    send(prompt);
  }

  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
        }}
      />
      <div className="new-chat" onClick={()=>newChat()}>
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>
      {prevPrompt.map((item, index) => {
        return (
          <div key={index} className="recent" onClick={()=>{loadPrev(item)}}>
            <FaRegMessage />
            {extend ? <p>{item.slice(0,18)+"..."}</p> : null}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
