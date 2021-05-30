import React from 'react'
import { timingSafeEqual } from 'crypto'

class LightSwitch extends Component {
  constructor(){
    super()

    // Inital state is defined
    this.state = {
      toggled: false
    }
  }

  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState(previousSate => {
      return {
        toggled: !previousState.toggled
      }
    })
  }

  render() {
    return(
      <div>
  <button onClick={this.handleClic}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    )
  }
}

export default LightSwitch