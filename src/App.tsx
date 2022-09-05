import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useDebugValue, useEffect, useState } from "react";

const useUniqueId = () => {
  const [uuid, setUuid] = useState();

  useEffect(() => {
    setUuid(uuidv4());
  }, [uuid]);

  useDebugValue(uuid ?? "loading...");

  return uuid;
};

const App = () => {
  const [newId, setNewId] = useState();

  const id = useUniqueId();

  return (
    <div className="App">
      <h1>Get a New Unique Id?</h1>
      <div>{newId}</div>
      <button
        onClick={() => {
          setNewId(id);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
