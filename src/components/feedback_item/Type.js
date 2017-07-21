import React, { Component } from 'react';

class Type extends Component {
  render() {
  	const type = this.props.type;

  	const typeTag = {
      color: '#63DC16',
      borderRadius: '5',
      border: '1px solid #68bf16',
      padding: '4px 15px',
      fontSize: '.5em',
      backgroundColor: 'transparent',
      margin: '0px 0px 20px 0px',
     };

    return  <div>
    			<button style={typeTag}>{ type }</button>
			</div>;
  }
}

export default Type;