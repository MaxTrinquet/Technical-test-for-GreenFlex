import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #1aaa55;
  color: #1aaa55;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

interface AddTodoFormProps {
  addTodo: AddTodo
}

export const AddTodoFrom : React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo)
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange}/>
      <Button type="submit" onClick={handleSubmit}>Add Todo</Button>
    </form>
  );
};
