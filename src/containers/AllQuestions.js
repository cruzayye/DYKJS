import React, { Component } from 'react';
import Q1 from '../components/questions/Q1';
import Q2 from '../components/questions/Q2';


export default class AllQuestions extends Component {
  state = {
    q1:'',
    q2:''
  }

  handleChange=({ target })=> {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { q1, q2 } = this.state;
    return (
      <>
        <Q1 q1State={q1} onChange={this.handleChange}/>
        <Q2 q2State={q2} onChange={this.handleChange}/>
      </>
    );
  }

}
