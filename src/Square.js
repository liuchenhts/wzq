import React from 'react';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button className="square">
        {this.props.value}
      </button>
     );
  }
}

export default Square