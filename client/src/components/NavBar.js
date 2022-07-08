import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/const';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Купи хуйню
        </NavLink>
        {user.isAuth ? (
          <Nav className="mx-auto" style={{ color: 'white' }}>
            <Button variant="outline-light">Админ панель</Button>
            <Button variant="outline-light" className="ml-5">
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav className="mx-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
