import React from 'react'
import { useSelector } from 'react-redux'
import RenderList from '../../components/RenderList/RenderList.tsx'
import TitleText from '../../components/TitleText/TitleText.tsx'
import { todoSelector } from '../../store/todoSlice.ts'

const AllTodos: React.FC = () => {
  const { allTodos } = useSelector(todoSelector)

  return (
    <>
      <TitleText>All Todos</TitleText>
      <RenderList data={allTodos} btn={true} />
    </>
  )
}

export default AllTodos
