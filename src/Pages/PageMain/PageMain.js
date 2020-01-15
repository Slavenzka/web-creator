// common
import React, { Component } from 'react'
// components
import Slider from 'containers/Slider/Slider'
import Info from 'components/Info/Info'
import Form from 'containers/Form/Form'
// packages
import axios from 'axios'
import { Container } from 'react-bootstrap'

class PageMain extends Component {
  state = {
    data: null
  }

  componentDidMount () {
    axios.get('server/data.json')
      .then(response => this.setState({
        data: response.data
      }))
  }

  render () {
    const { data } = this.state

    if (!data) return null;

    const components = data.components.map((item, key) => {
      let itemContent = null;
      switch (item.type) {
        case 'GalleryComponent':
          itemContent = <Slider data={item.metadata} />
          break
        default:
          itemContent = <Info data={item.metadata} />
          break;
      }

      return (
        <React.Fragment key={key}>
          {itemContent}
        </React.Fragment>
      )
    })

    return (
      <main>
        <Container>
          {components}
          <Form data={data.form} />
        </Container>
      </main>
    )
  }
}

export default PageMain
