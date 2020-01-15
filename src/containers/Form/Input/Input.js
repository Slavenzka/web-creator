// common
import React, { PureComponent } from 'react'
// packages
import classNames from 'classnames'
// styles
import css from './Input.module.scss'

class Input extends PureComponent {
  state = {
    focused: false
  }

  handleFocusedInput = () => {
    this.setState(prevState => {
      return {
        focused: !prevState.focused
      }
    })
  }


  render () {
    const {
      type,
      label,
      changed,
      value,
      id,
      required
    } = this.props

    let inputElement = null

    switch (type) {
      case 'text':
      case 'phone':
      case 'email':
        inputElement = (
          <div className={classNames(css.inputWrapper, { [css.inputWrapperFocus]: this.state.focused })}>
            <input
              className={css.input}
              value={value}
              onChange={changed}
              id={id}
              required={required}
              onFocus={this.handleFocusedInput}
              onBlur={this.handleFocusedInput}
            />
          </div>
        )
        break
      case 'date':
        inputElement = (
          <div className={classNames(css.dateWrapper, css.inputWrapper, { [css.inputWrapperFocus]: this.state.focused })}>
            <input
              className={classNames(css.input, css.date)}
              value={value}
              onChange={changed}
              id={id}
              required={required}
              onFocus={this.handleFocusedInput}
              onBlur={this.handleFocusedInput}
            />
          </div>
        )
        break
      case 'textarea':
        inputElement = (
          <div className={classNames(css.textareaWrapper, { [css.textareaWrapperFocus]: this.state.focused })}>
            <textarea
              className={classNames(css.input, css.textarea)}
              value={value}
              onChange={changed}
              id={id}
              required={required}
              onFocus={this.handleFocusedInput}
              onBlur={this.handleFocusedInput}
            />
          </div>
        )
        break
      default:
        inputElement = (
          <div className={classNames(css.inputWrapper, { [css.inputWrapperFocus]: this.state.focused })}>
            <input
              className={css.input}
              value={value}
              onChange={changed}
              id={id}
              required={required}
              onFocus={this.handleFocusedInput}
              onBlur={this.handleFocusedInput}
            />
          </div>
        )
      }

    return (
      <div className={css.element}>
        <label className={css.label} htmlFor={id}>{label}</label>
        {inputElement}
      </div>
    )
  }
}

export default Input
