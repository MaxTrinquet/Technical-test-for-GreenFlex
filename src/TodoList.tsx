import React from "react";
import { TodoListItem } from "./TodoListItem";
import styled from "styled-components"
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

const ListContainer = styled.div`
margin-left: 10px;
text-align: left
`

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ListContainer>
      {todos.map(todo => {
        return (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        )
      })}
    </ListContainer>
  )
};
