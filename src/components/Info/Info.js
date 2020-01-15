// common
import React from 'react';
// components
import TextBlock from 'components/Info/TextBlock/TextBlock'
// packages
import { Row } from 'react-bootstrap'
// styles
import css from './Info.module.scss'

const Info = props => {
  const content = props.data.components.map((item, key) => {
    return <TextBlock col={item.col} data={item.metadata} key={key} className={css.block} />
  })

  return (
    <section className={css.text}>
      <Row>
        <h2 className='visuallyHidden'>
          О компании
        </h2>
        {content}
      </Row>
    </section>
  )
}

export default Info;
