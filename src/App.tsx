import React from "react";
import "./App.css";
import Messages from "./components/message/Messages";
import { MessageStateProvider } from "./message-state";

function App() {
  return (
    <MessageStateProvider>
      <Messages />
    </MessageStateProvider>
  );
}

export default App;
