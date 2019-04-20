import React, { Component } from 'react';
import Q1 from '../components/questions/Q1';
import Q2 from '../components/questions/Q2';
// import styles from './Qs.css';



//maybe we should have a nested object for each question and then loop over each one in order to have less dry code.
export default class AllQuestions extends Component {
  state = {
    q1:'',
    q1disabled: true,
    q2:'',
    q2disabled: true,
    score: 10
  }
  //ORIGINAL ONCHANGE
  // handleChange=({ target })=> {
  //   this.setState({ [target.name]: target.value });

  // };
  changeQ1 = ({ target }) => {
    this.setState({ q1: target.value });
    this.setState({ q1disabled: false });
  };

  changeQ2 = ({ target }) => {
    this.setState({ q2: target.value });
    this.setState({ q2disabled: false });
  };
  

  handleQ1 = e => {
    e.preventDefault();
    const { q1, score } = this.state;
    if(q1 !== 'false') this.setState({ score: score - 1 });
    this.setState({ q1disabled: true });
  }
  
  handleQ2 = e => {
    e.preventDefault();
    const { q2, score } = this.state;
    if(q2 !== 'false') this.setState({ score: score - 1 });
    this.setState({ q2disabled: true });
  }



 

  render() {
    const { q1, q2 } = this.state;
    return (
      <>
      {/* <header>
        <h2>Do You Know JS?</h2>
        <p>This quiz is for intermediate Js developers to see where you stand. Some of these questions were inspired by real interview questions</p>
        <p>Once you submit you submit your answere, theres no going back!.. obviously you can always retake the quiz</p>
      </header> */}
      <section>
        <Q1 
          q1State={q1} 
          onChange={this.changeQ1} 
          onSubmit={this.handleQ1} 
          disabled={this.state.q1disabled}

        />
        
        <Q2 
          q2State={q2} 
          onChange={this.changeQ2}
          onSubmit={this.handleQ2}
          disabled={this.state.q2disabled}/>
      </section>
      </>
    );
  }

}
