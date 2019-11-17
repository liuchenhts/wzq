import React from "react";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let classes = 'square' + (this.props.value === 'X' ? ' x' : ' o');
    classes += this.props.winning ? ' win' : '';

    return (
      <button id={this.props.id} className={classes} onClick={() => this.props.onClick()
      }>
        {this.props.value}
      </button >
    );
  }
}

export default Square;
