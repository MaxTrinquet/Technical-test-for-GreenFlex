import './App.css';
import React, { useState }from "react";
import { TodoList } from './TodoList';
import { AddTodoFrom } from './addTodoForm';
import styled from 'styled-components'
const initialTodos: Array<Todo> = [
  {text: "task 1", complete: true},
  {text : "task 2", complete: false}
];

const Container = styled.div`
  text-align: center;
  background: white;
  margin : auto;
  margin-top: 10px;
  border: solid 2px black;
  width: 20%;
  `


const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  React.useEffect(() => {
    const json: any = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const toggleTodo: ToggleTodo = ( selectedTodo  ) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, { text: newTodo, complete:false }])
  }

  return (
    <React.Fragment>
      <Container>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <AddTodoFrom addTodo={addTodo}/>
      </Container>
    </React.Fragment>

  );
}

export default App;
