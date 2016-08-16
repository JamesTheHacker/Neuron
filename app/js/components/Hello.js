import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image} width={this.props.width} />
        <h1>Welcome to Neuron!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Hello image={"dist/img/logo.png"} width={200} />,
  document.getElementById("app")
)
