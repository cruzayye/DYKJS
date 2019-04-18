import React, { Component } from 'react';
import Q1 from '../components/questions/Q1';
import Q2 from '../components/questions/Q2';


export default class AllQuestions extends Component {
  state = {
    q1:'falsey',
    q2:'falsey',
    score: 10
  }

  handleChange=({ target })=> {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { q1, score } = this.state;
    if(q1 !== 'false') {
      this.setState({ score: score - 1 });
    } 
      
  }

  render() {
    const { q1, q2 } = this.state;
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <Q1 q1State={q1} onChange={this.handleChange}/>
        <Q2 q2State={q2} onChange={this.handleChange}/>
        <button>DONE</button>
      </form>
      </>
    );
  }

}
