import React, { useContext } from 'react'
import { Context } from '../index'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const history = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Купи хуйню
        </NavLink>
        {user.isAuth ? (
          <Nav className="mx-auto" style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => history(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant="outline-light"
              className="ml-5"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="mx-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => history(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
