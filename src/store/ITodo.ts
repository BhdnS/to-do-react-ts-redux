export interface ITodo {
  id: number
  title: string
  delete: boolean
}

export interface ITodosState {
  allTodos: ITodo[]
  deleteTodos: ITodo[]
}

export interface IRootTodos {
  todos: ITodosState
}
