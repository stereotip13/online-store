import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import star2 from '../assets/star4.png'
import { fetchOneDevice } from '../http/deviceApi'

export const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data))
  }, [])
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            //src={process.env.REACT_APP_API_URL + device.img}
            src={
              'https://funart.pro/uploads/posts/2021-04/thumbs/1618123186_30-p-spyashchii-yezhik-zhivotnie-krasivo-foto-32.jpg'
            }
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-colum align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star2}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>От: {device.price} руб</h3>
            <Button variant={'outline - dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <h1>Характеристики</h1>
      <Row className="d-flex flex-column m-3">
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}
