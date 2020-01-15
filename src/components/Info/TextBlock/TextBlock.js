// common
import React from 'react'
import PropTypes from 'prop-types'
// packages
import { Col } from 'react-bootstrap'
// styles
import css from './TextBlock.module.scss'

const TextBlock = ({ col, data, className }) => {
  const [type, qty] = col.split('-')
  const dynamicProp = { [type]: qty }

  return (
    <Col {...dynamicProp} className={className}>
      <div className={css.wrapper}>
        <h3 className={css.title}>
          {data.title}
        </h3>
        <div className={css.wyziwig} dangerouslySetInnerHTML={{ __html: data.text }}  />
      </div>
    </Col>
  )
}

TextBlock.propTypes = {
  className: PropTypes.string,
  col: PropTypes.string,
  data: PropTypes.object
}

export default TextBlock
