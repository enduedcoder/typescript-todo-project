import React, { useState } from "react";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewForm from "./components/NewForm";

function App() {
  const [data, setData] = useState<Todo[]>([]);
  const addNewdataHandler = (text: string) => {
    setData((prevState) => {
      // //alternate
      // return prevState.concat(data);

      return [{ id: new Date().toISOString(), text: text }, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewForm addNewdata={addNewdataHandler} />
      <Todos items={data} />
    </div>
  );
}

export default App;
