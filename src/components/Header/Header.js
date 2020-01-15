import React, { Component } from 'react';
import css from './Header.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

class Header extends Component {
  render () {
    return (
      <header className={css.header}>
        <Container>
          <Row>
            <Col>
              <h1 className={css.title}>
                Тестовое задание
              </h1>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;
