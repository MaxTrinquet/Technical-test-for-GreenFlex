import React from "react";
import styled from "styled-components"

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const ListContainer = styled.div`
`

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

  return (
    <ListContainer>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}/>
        {todo.text}
      </label>
    </ListContainer>
  )}
