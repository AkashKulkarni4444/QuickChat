import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} exact />
    </div>
  );
}

export default App;
