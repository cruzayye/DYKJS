import React, { Component } from 'react';
import Q1 from '../components/questions/Q1';


export default class AllQuestions extends Component {
  state = {
    q1:''
  }

  handleChange=({ target })=> {
    this.setState({ q1: target.value });
  };

  render() {
    const { q1 } = this.state;
    return (
      <>
      <form>
        <Q1 q1State={q1} onChange={this.handleChange}/>
      </form>
      </>
    );
  }

}
