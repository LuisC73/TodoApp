import TodoApp from "./components/TodoApp";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className={!theme ? "App" : "App-light"}>
      <TodoApp theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
