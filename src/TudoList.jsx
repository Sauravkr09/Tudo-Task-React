import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [tudos, setTudes] = useState([{ task: "sample-task", id: uuidv4(), isDone:false }]);
  let [newTudo, setNewTudo] = useState("");

  let addNewTask = () => {
    setTudes((prevTudos) => {
      return [...prevTudos, { task: newTudo, id: uuidv4(), isDone: false }];
    });
    setNewTudo("");
  };

  let updateTudoValue = (event) => {
    setNewTudo(event.target.value);
  };

  let deleteTudo = (id) => {
    setTudes(tudos.filter((prevTudos) => prevTudos.id !== id));
  };

  let markAllDone = () => {
    setTudes((prevTudos) =>
      prevTudos.map((tudo) => {
        return {
          ...tudo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTudes((prevTudos) =>
      prevTudos.map((tudo) => {
        if (tudo.id == id) {
          return {
            ...tudo,
            isDone: true,
          };
        } else {
          return tudo;
        }
      })
    );
  };

  return (
    <div>
    <h1> Add Daily Task</h1>
      <input
        placeholder="add a task"
        value={newTudo}
        onChange={updateTudoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h2>Task Todo</h2>
      <ul>
        {tudos.map((tudo) => (
          <li key={tudo.id}>
            <span style={tudo.isDone ? {textDecorationLine: " Line-through"} : {}}>{tudo.task}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTudo(tudo.id)}>Delete</button>
            <button onClick={() => markAsDone(tudo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}>Mark All  as Done</button>
    </div>
  );
}
