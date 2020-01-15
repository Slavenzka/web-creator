import React from 'react'
import css from './Footer.module.scss'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={css.wrapper}>
      <Container>
        <Row>
          <p style={{ visibility: 'hidden' }}>Some footer content</p>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
