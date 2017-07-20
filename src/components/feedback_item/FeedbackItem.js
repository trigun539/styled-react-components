import React, { Component } from 'react';
//import styles from './styles.css'; 
import Type from './Type';

class FeedbackItem extends Component {
  render() {
  	const name = this.props.name;

    const css = {
      color: '#7F7F7F',
    }
  	const upperBox = {
 			border: '1px solid #d4d1d1',
			padding: '18px 15px',
			margin: '0px 680px 0px 20px',
			fontWeight: 'bold',
      fontSize: '1.2em'
     };
    
     const lowerBox = {
      fontSize: '1.0em',
      border: '1px solid #d4d1d1',
      borderTop: 'transparent',
      padding: '25px 20px 35px',
      margin: '0px 680px 0px 20px',
     };

     const nameStyle = {
      fontWeight: 'bold',
      float: 'left',
     };
     const dateStyle = {
  
      float: 'right',
      color: '#DCDCDC',
      fontWeight: 'normal'
     };



    return(
    	// <div className={ styles['itemContainer'] }>
    	<div style={css}> 
        <div style={upperBox}>
          <Type type='NEW'/>
      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis elit, blandit vel consequat placerat, mollis in leo. Etiam convallis, est quis pharetra mollis.</p>
        </div>
        <div style={ lowerBox }>
          <span style={nameStyle}>Edwin Perez</span>
          <span style={dateStyle}>16 Jun 2016</span>
         </div>
    	</div>
    	);
  	}
}

export default FeedbackItem;