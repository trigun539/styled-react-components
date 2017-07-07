import React, { Component } from 'react';
import styles               from './styles.css';

class Custom extends Component {

  render () {
    const { title } = this.props;

    return (
      <h1 className={ styles['title'] }>Title: { title }</h1>
    );
  }

}

Custom.propTypes = {};

export default Custom;
