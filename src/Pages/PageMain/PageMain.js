import React, { Component } from 'react'
import Slider from 'components/Slider/Slider'
import Info from 'components/Info/Info'
import Form from 'components/Form/Form'
import axios from 'axios'

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
    console.log(data);
    return (
      <main>
        <Slider />
        <Info />
        <Form />
      </main>
    )
  }
}

export default PageMain
