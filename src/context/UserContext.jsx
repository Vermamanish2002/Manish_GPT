import React, { createContext, useState } from "react";
import run from "../gemini";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const[prevPrompt,setPrevPrompt]=useState([])
  const[recentPrompt,setRecentPrompt]=useState("")

  function newChat(){
    setShowResult(false)
    setLoading(false)
  }


  async function send(input) {
    setResultData("")
    setShowResult(true);
    setRecentPrompt(input)
    setLoading(true);

    setPrevPrompt((prev)=>[...prev,input])

    let response = await run(input);
    setResultData(response.split("**") && response.split("*"));
    setLoading(false)
    setInput("")
  }
  const data = {
    send,
    input,
    setInput,
    loading,
    setLoading,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    recentPrompt,setRecentPrompt,prevPrompt,setPrevPrompt,newChat
  };
  return (
    <>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </>
  );
};

export default UserContext;
