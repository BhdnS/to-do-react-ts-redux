import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/Button/Button.tsx'
import TitleText from '../../components/TitleText/TitleText.tsx'
import { addTodo } from '../../store/todoSlice.ts'
import classes from './AddTodos.module.scss'

const AddTodos: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputValue.trim()) {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <TitleText>Add Todos</TitleText>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          value={inputValue}
          onChange={handleOnChange}
        />
        <Button>Add Todo</Button>
      </form>
    </>
  )
}

export default AddTodos
