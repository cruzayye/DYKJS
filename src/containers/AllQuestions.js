import React, { Component } from 'react';
import Q1 from '../components/questions/Q1';
// import Q2 from '../components/questions/Q2';


export default class AllQuestions extends Component {
  state = {
    q1:'falsey',
    score: 10,
    disabled: false
  }

  handleChange=({ target })=> {
    this.setState({ [target.name]: target.value });
  };

  handleQ1 = e => {
    e.preventDefault();
    const { q1, score } = this.state;
    if(q1 !== 'false') this.setState({ score: score - 1 });
    this.handleClick();
    

  }

  handleClick = () => {
    this.setState({ disabled: true });
  }

 

  render() {
    const { q1 } = this.state;
    return (
      <>
        <Q1 
          q1State={q1} 
          onChange={this.handleChange} 
          onSubmit={this.handleQ1} 
          disabled={this.state.disabled}/>
      </>
    );
  }

}
