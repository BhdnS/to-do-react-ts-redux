import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../store/ITodo.ts'
import { deleteTodo } from '../../store/todoSlice.ts'
import Button from '../Button/Button.tsx'
import classes from './TodoItem.module.scss'

interface ITodoItem {
  todo: ITodo
  index: number
  btn: boolean
}

const TodoItem: React.FC<ITodoItem> = memo(({ todo, btn, index }) => {
  const style = btn ? `${classes.item}` : `${classes.item} ${classes.itemRed}`
  const dispatch = useDispatch()
  const handleDelete = (id: number) => dispatch(deleteTodo(id))

  return (
    <li className={style} key={todo.id}>
      {index + 1}. {todo.title}
      {btn && <Button onClick={() => handleDelete(todo.id)}>Delete</Button>}
    </li>
  )
})

export default TodoItem
