import React, { PureComponent } from 'react'
import Parabola from './Parabola'
import styles from './index.less'

class Ball extends PureComponent {

  componentDidMount() {
    const { curvature, speed, changeFlyBallCount, id, target } = this.props
    const options = {
      curvature, // 曲率
      speed, // 速度
      complete: changeFlyBallCount.bind(this, id)
    }
    this.parabola = new Parabola(this.container, target, options)
    this.parabola.run()
  }

  componentWillUnmount() {
    this.parabola.stop()
  }

  render() {
    const {x=0, y=0} = this.props
    const getRef = (c) => { this.container = c }
    // 小球
    return (
      <div
        className={styles.flyBall}
        ref={getRef}
        style={{top: y, left: x}}
      />
    )
  }
}

export default Ball
