import React from 'react';
import css from './Container.module.scss';

const Container = ({ children }) => {
  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}

export default Container;
