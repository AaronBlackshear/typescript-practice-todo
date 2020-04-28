import React from 'react'

interface Todo {
  id: number,
  value: string,
  checked: boolean,
}

interface Test {
  todo: Todo,
  handleChange(): void,
}

export default function Todo({ todo, handleChange }: Test) {

  return (
    <label onChange={handleChange}>
      <input type="checkbox" readOnly checked={todo.checked} />
      <p>{todo.value}</p>
    </label>
  )
}
