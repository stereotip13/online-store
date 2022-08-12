import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { check } from './http/userApi'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true) //локальное состояние отвечает за вопрос идет ли загрузка страницы
  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true)
          user.setIsAuth(true)
        })
        .finally(() => setLoading(false))
    }, 2000)
  }, [])
  if (loading) {
    return <Spinner animation={'grow'} />
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
