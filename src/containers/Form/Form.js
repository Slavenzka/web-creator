// common
import React, { PureComponent } from 'react'
// components
import Input from 'containers/Form/Input/Input'
// packages
import { Col, Row } from 'react-bootstrap'
import classNames from 'classnames'
// styles
import css from 'containers/Form/Form.module.scss'

class Form extends PureComponent {
  state = {
    checkbox: true
  }


  componentDidMount () {
    this.props.data.fields.forEach(field => {
      this.setState({
        [field.name + '-' + field.type]: ''
      })
    })
  }

  inputChangedHandler = (event, controlName, controlType) => {
    let updatedFormState = {
      ...this.state,
      [controlName + '-' + controlType]: event.target.value
    }

    this.setState({
      ...updatedFormState
    })
  }

  checkboxChangedHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        checkbox: !prevState.checkbox
      }
    })
  }

  submitClickedHandler = (evt) => {
    evt.preventDefault()
    console.log('Submitted!')
  }

  render () {
    const { title, fields, field_groups, submit_button } = this.props.data

    const formGroups = Object.keys(field_groups).map((groupName, key) => {
      const [ , type, qty] = field_groups[groupName].split('-')
      const dynamicBootstrapProp = { [type]: qty }

      const groupContent = fields
        .filter(formElement => {
          return formElement.group === groupName
        })
        .map((formElement, index) => {
          return (
            <Col
              md={groupName === 'main' ? 6 : 12}
              className={css.formBlock}
              key={index}
            >
              <Input
                name={formElement.name}
                type={formElement.type}
                label={formElement.label}
                changed={evt => this.inputChangedHandler(evt, formElement.name, formElement.type)}
                value={this.state[formElement.name + '-' + formElement.type] || ''}
                key={index}
                id={formElement.name + '-' + formElement.type + '-' + key + '-' + index}
                required={formElement.required}
              />
            </Col>
          )
        })

      return (
        <Col
          {...dynamicBootstrapProp}
          key={key}
        >
          <Row style={{ height: groupName === 'additional' && '100%', alignItems: 'flex-start' }}>
            {groupContent}
          </Row>
        </Col>
      )
    })

    const checkbox = fields.filter(formElement => {
      return formElement.type === 'checkbox'
    }).map((item, key) => {
      return (
        <div className={css.checkboxWrapper} key={key}>
          <input
            className={classNames(css.checkbox, 'visuallyHidden')}
            type='checkbox'
            id={item.name + '-' + key}
            checked={this.state.checkbox}
            onChange={this.checkboxChangedHandler}
          />
          <label
            className={classNames(css.labelWyziwig, { [css.labelWyziwigActive]: this.state.checkbox })}
            htmlFor={item.name + '-' + key}
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        </div>
      )
    })

    return (
      <section className={css.form}>
        {title &&
          <h3 className={css.title}>
            {title}
          </h3>
        }
        <div className={css.formWrapper}>
          <form action="#">
            <Row>
              {formGroups}
              <Col md={12}>
                {checkbox}
              <button
                className={css.submit}
                onClick={evt => this.submitClickedHandler(evt)}
                type='submit'
              >
                {submit_button.text}
              </button>
              </Col>
            </Row>
          </form>
        </div>
      </section>
    )
  }
}

export default Form
