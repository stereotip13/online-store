import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';

export const Auth = () => {
  const location = useLocation(); //получаем маршрут запроса в строке
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          {' '}
          <Form.Control className="mt-4" placeholder="Введите ваш Email..." />
          <Form.Control className="mt-4" placeholder="Введите ваш пароль..." />
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет акк?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Есть акк?
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}

            <Button variant="outline-success">
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
