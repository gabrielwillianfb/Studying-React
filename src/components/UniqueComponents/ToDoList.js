import { useState } from "react"; // Importa o hook useState da biblioteca React

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    // Atualiza o estado 'todos' com um novo array que inclui o valor atual de 'inputValue'
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Adicionar Tarefa</button>
      <ul>
        {/* Mapeia cada item 'todo' no array 'todos' para um elemento <li> */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
