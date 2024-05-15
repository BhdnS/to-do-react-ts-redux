import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RenderList from '../../components/RenderList/RenderList.tsx'
import TitleText from '../../components/TitleText/TitleText.tsx'
import { deleteTodo, todoSelector } from '../../store/todoSlice.ts'

const AllTodos: React.FC = () => {
  const { allTodos } = useSelector(todoSelector)
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <TitleText>All Todos</TitleText>
      <RenderList onDelete={handleDelete} data={allTodos} btn={true} />
    </>
  )
}

export default AllTodos
