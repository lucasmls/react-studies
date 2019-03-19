import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  static defaultProps = {
    appName: "goReact"
  };

  static propTypes = {
    appName: PropTypes.string
  };

  render() {
    return <h1>App {this.props.appName}!</h1>;
  }
}

export default App;
