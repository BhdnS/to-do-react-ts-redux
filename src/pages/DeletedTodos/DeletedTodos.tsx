import React from 'react'
import { useSelector } from 'react-redux'
import RenderList from '../../components/RenderList/RenderList.tsx'
import TitleText from '../../components/TitleText/TitleText.tsx'
import { todoSelector } from '../../store/todoSlice.ts'

const DeletedTodos: React.FC = () => {
  const { deleteTodos } = useSelector(todoSelector)

  return (
    <>
      <TitleText>Deleted Todos</TitleText>
      <RenderList data={deleteTodos} btn={false} />
    </>
  )
}

export default DeletedTodos
