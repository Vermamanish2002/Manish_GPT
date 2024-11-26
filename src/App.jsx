import React, { useContext } from "react";
import SideBar from "./components/sideBar/SideBar";
import ChatSection from "./components/ChatSection/ChatSection";
import Separation from "./components/separation/Separation";
import { dataContext } from "./context/UserContext";

const App = () => {
  let data=useContext(dataContext)
 
  return (
    <>
      <SideBar />
      <Separation/>
      <ChatSection/>
    </>
  );
};

export default App;
