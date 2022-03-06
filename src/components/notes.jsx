import { useState } from "react";
import { NoteCont } from "../components/noteComp";
export function Notes() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  const handleClick = () => {
    const payload = {
      title: query,
      flag: false,
    };
    let newTask = [...tasks, payload];
    setTasks(newTask);
  };

  return (
    <div>
      <div>
        <h1>Notes App </h1>
        <input
          onChange={handleChange}
          value={query}
          type="text"
          placeholder="Enter Some notes"
        />
        <button onClick={handleClick}>Add Notes</button>
        <button>A to Z</button>
      </div>

      <div>
        if(handleChange()=>{
            
        })
        {tasks.map((items) => {
          return <NoteCont {...items} />;
        })}

      </div>
    </div>
  );
}
