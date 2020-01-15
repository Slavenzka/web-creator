// common
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// packages
import 'react-id-swiper/src/styles/css/swiper.css'
import Swiper from 'react-id-swiper'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'
// styles
import css from 'containers/Slider/Slider.module.scss'

class Slider extends PureComponent {
  swiper = null

  state = {
    activeIndex: 0
  }

  goNext = (speed = 500) => {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  goPrev = (speed = 500) => {
    if (this.swiper) this.swiper.slidePrev()
  }

  goTo = (num, speed = 1000) => {
    this.swiper.slideTo(num, speed)
  }

  structureSlides = (array, itemsPerSubarray) => {
    let input = array.slice()
    let result = []

    while (input.length > 0) {
      result.push(input.splice(0, itemsPerSubarray))
    }

    return result
  }

  icon = () => (
    <svg className={css.icon} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <linearGradient id='linear-gradient' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='100%' y2='100%' gradientTransform='matrix(-1, 0, 0, 1, 0, 0)'>
        <stop offset='-1.93%' stopColor='#93E08C' />
        <stop offset='97.03%' stopColor='#78CEBF' />
      </linearGradient>
      <path d='M15.9992 0C7.17884 0.00159992 0.00159992 7.17884 0 16.0008C0 24.8228 7.17724 32 16.0008 32C24.8228 31.9984 32 24.8212 32 16.0008C32 7.17884 24.8228 0.00159992 15.9992 0ZM16.0008 28.8002C8.94195 28.8002 3.19984 23.058 3.19984 16.0008C3.20144 8.94355 8.94355 3.20144 15.9992 3.19984C23.058 3.20144 28.8002 8.94355 28.8002 16.0008C28.8002 23.0564 23.058 28.7986 16.0008 28.8002Z'/>
      <path d='M16.02 9.59302L9.6123 16.0007L16.02 22.4068V17.6006H22.4101V14.4008H16.02V9.59302Z' />
    </svg>
  )

  render () {
    const { activeIndex } = this.state
    const { title, images, slidesPerView } = this.props.data

    console.log(isMobile)

    const params = {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1500,
      on: {
        slideChangeTransitionStart: () => {
          if (this.swiper) {
            const {activeIndex} = this.swiper
            this.setState({ activeIndex })
          }
        },
      }
    }

    const slidesQty = isMobile ? images.length : Math.ceil(images.length / slidesPerView)

    let structuredImages = this.structureSlides(images, slidesPerView)

    const sliderContent = isMobile
      ? images.map((image, key) => {
        return <img className={css.image} src={image} key={key} alt='Фото-слайд' />
      })
      : structuredImages.map((subarray, key) => {
        const slide = subarray.map((item, index) => {
          return <img className={css.image} src={item} key={index} alt='Фото-слайд' />
      })

      return (
        <div className={css.slide} key={key}>
          {slide}
        </div>
      )
    })

    return (
      <section className={css.wrapper}>
        <h2 className={css.title}>
          {title}
        </h2>
        <div className={css.slider}>
          <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
            {sliderContent}
          </Swiper>
        </div>
        <div className={css.controls}>
          <button
            className={classnames(css.button, { [css.buttonDisabled]: activeIndex === 0 })}
            onClick={this.goPrev}
          >
            Предыдущий слайд
            {this.icon()}
          </button>
          <div className={css.pagination}>
            {new Array(slidesQty).fill(null).map((item, key) => {
              return (
                <div
                  className={classnames(css.bullet, { [css.bulletActive]: key === activeIndex })}
                  onClick={() => this.goTo(key)}
                  key={key}
                >
                  slide {key}
                </div>
              )
            })}
          </div>
          <button
            className={classnames(css.button, css.buttonNext, { [css.buttonDisabled]: activeIndex === slidesQty - 1 })}
            onClick={this.goNext}
          >
            Следующий слайд
            {this.icon()}
          </button>
        </div>
      </section>
    )
  }
}

Slider.propTypes = {
  data: PropTypes.object
}

export default Slider
