// import React, { Component } from 'react';
// import AllQuestions from './AllQuestions';

// export default class AllQs extends Component {
//   render() {
//     return (
//       <>
//         <AllQuestions />
//       </>
//     );
//   }
// }
import React from 'react';
import AllQuestions from './AllQuestions';

export default function AllQs() {
  return (
      <>
        <AllQuestions />
      </>
  );
}

// each question will sit in a Component class that holds state along with its inputs and lables no need to import a representational compoenent anymore. 
