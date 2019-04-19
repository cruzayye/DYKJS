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

  minus1 = () => this.setState({ score: this.state.score - 1 })

  async q1Result() {
    if(this.state.q1 !== 'false') {
      this.minus1();
    } 
  }
  // q2Result = () => {
  //   if(this.state.q2 !== 'false') {
  //     return this.minus1();
  //   } 
  // }

  async handleSubmit(e) {
    var pev = await e.preventDefault();
    var q1 = await this.q1Result();
    pev;
    q1;
    // this.q2Result();
    // const { q1, q2 } = this.state;
    // if(q1 !== 'false') {
    //   this.minus1();
    // } 
    // else if(q2 !== 'false') {
    //   this.minus1();
    //   console.log('false');
    // }
      
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { q1, q2, score } = this.state;
  //   if(q1 !== 'false') {
  //     this.setState({ score: score - 1 });
  //   } if(q2 !== 'false') {
  //     this.setState({ score: score - 1 });

  //   }
      
  // }

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
