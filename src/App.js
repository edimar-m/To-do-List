import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { db } from "./firebase-config";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const traerDesdeFirebase = () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTodos(docs);
    });
  };

  useEffect(traerDesdeFirebase, []);

  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case "completed":
          setfilteredTodos(todos.filter((task) => task.completed === true));
          break;
        case "uncompleted":
          setfilteredTodos(todos.filter((task) => task.completed === false));
          break;
        default:
          setfilteredTodos(todos);
      }
    };

     //Local storage
    // const saveLocalTodos = () => {
    //   localStorage.setItem('todos', JSON.stringify(todos))
    // }

    filteredHandler();
  }, [todos, status]);

  
  return (
    <div>
      <header>
        <h1>
          ToDo List
        </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;