import { db } from "../firebase-config";

//Función to-do
const Todo = ({ todo }) => {
  const deleteHandler = () => {
    // setTodos(todos.filter(task => task.id !== todo.id))
    db.collection("todos")
      .doc(todo.id)
      .delete()
      .then(() => {
        console.log("Documento borrado exitosamente!");
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al borrar documento: ", error);
      });
  };

  const completeHandler = () => editarCompleted(todo);

  const editarCompleted = (tarea) => {
    // Add a new document in collection "cities"
    db.collection("todos")
      .doc(tarea.id)
      .set({
        ...tarea,
        completed: !tarea.completed,
      })
      .then(() => {
        console.log("Documento escrito exitosamente!");
      })
      .catch((error) => {
        console.error("Ha ocurrido un error al escribir documento: ", error);
      });
  };

  return (
    <ul className="todo">
      <li className= {`todo-item ${todo.completed && "completed"}`}>
        {todo.text}
      </li>
      <button
        onClick={completeHandler}
        className={`complete-btn ${todo.completed && "btn-change"}`}
      >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash-alt"></i>
      </button>
    </ul>
  );
};

export default Todo;