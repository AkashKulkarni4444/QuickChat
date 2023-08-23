import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import { useEffect } from "react";

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('https://quickchat-wvdt.onrender.com', {mode:'cors'});
      const data = await response.json();
      console.log(data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} exact />
    </div>
  );
}

export default App;
