import React, { Component } from 'react';
import css from './Header.module.scss'
import Container from 'components/Grid/Container'

class Header extends Component {
  render () {
    return (
      <header className={css.header}>
        <Container>
          <h1 className={css.title}>
            Тестовое задание
          </h1>
        </Container>
      </header>
    )
  }
}

export default Header;
