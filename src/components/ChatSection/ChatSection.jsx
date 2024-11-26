import React, { useContext, useState } from "react";
import "./ChatSection.css";
import Darkmode from "../darkmode/Darkmode";
import { IoMdSend } from "react-icons/io";
import { dataContext } from "../../context/UserContext";
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";
import manish from "../../assets/manish.png";

const ChatSection = () => {
  const {
    send,
    input,
    setInput,
    showResult,
    resultData,
    recentPrompt,
    loading,
  } = useContext(dataContext);

  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult ? (
          <div className="headings">
            <span>HELLO, I'M MANISH </span> <span>Your Own Assistant </span>
            <span>What can I help you?</span>
          </div>
        ) : (
          <div className="result-box">
            <div className="user-box">
              <img src={user} alt="" width="50px" />
              <p>{recentPrompt}</p>
            </div>
            <div className="ai-box">
              <img src={manish} alt="" width="50px" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="bottomsection">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
         
          placeholder="Enter a prompt"
          value={input}
        />
        {input?<button
          onClick={() => {
            send(input);
          }}
          title="Send your prompt"
          id="send-btn"
        >
          <IoMdSend />
        </button>:null}
        
        <Darkmode />
      </div>
    </div>
  );
};

export default ChatSection;
