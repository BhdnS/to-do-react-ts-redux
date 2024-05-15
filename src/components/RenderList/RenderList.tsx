import React from 'react'
import { ITodo } from '../../store/todoSlice.ts'
import Button from '../Button/Button.tsx'
import classes from './RenderList.module.scss'

interface IRenderList {
  data: ITodo[]
  btn: boolean
  onDelete?: (id: number) => void
}

const RenderList: React.FC<IRenderList> = ({ data, btn, onDelete }) => {
  const style = btn ? `${classes.item}` : `${classes.item} ${classes.itemRed}`

  return (
    <ul className={classes.list}>
      {data.map((todo, i) => (
        <li className={style} key={todo.id}>
          {i + 1}. {todo.title}
          {btn && (
            <Button onClick={() => onDelete && onDelete(todo.id)}>
              Delete
            </Button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default RenderList
