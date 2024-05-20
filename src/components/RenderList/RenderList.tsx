import React from 'react'
import { ITodo } from '../../store/ITodo.ts'
import TodoItem from '../TodoItem/TodoItem.tsx'
import classes from './RenderList.module.scss'

interface IRenderList {
  data: ITodo[]
  btn: boolean
}

const RenderList: React.FC<IRenderList> = ({ data, btn }) => {
  return (
    <ul className={classes.list}>
      {data.map((todo, i) => (
        <TodoItem key={todo.id} index={i} todo={todo} btn={btn} />
      ))}
    </ul>
  )
}

export default RenderList
