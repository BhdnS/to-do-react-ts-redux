import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout.tsx'
import AddTodos from '../pages/AddTodos/AddTodos.tsx'
import AllTodos from '../pages/AllTodos/AllTodos.tsx'
import DeletedTodos from '../pages/DeletedTodos/DeletedTodos.tsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <AddTodos />,
      },
      {
        path: 'all',
        element: <AllTodos />,
      },
      {
        path: 'deleted',
        element: <DeletedTodos />,
      },
    ],
  },
])

export default router
