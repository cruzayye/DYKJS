import React from 'react';
import PropTypes from 'prop-types';

export default function Q1({ onChange, q1State, onSubmit, disabled }) {
  return (
    <form onSubmit={onSubmit}>
      <h3>
        Javascript is Essentially the same as Java if you really think about it. 
      </h3>
      <label>
        <input
          type="radio"
          name='q1'
          value="true"
          checked={q1State === 'true'}
          onChange={onChange}
        />
          True
      </label>

      <label name='q1' value='false'>
        <input
          type="radio"
          name='q1'
          value="false"
          checked={q1State === 'false'}
          onChange={onChange}
        />
          False
      </label>
      <button disabled={disabled}>submit</button>
      {/* <input type='button' name='q1' value='true' onChange={onChange} /> */}
      {/* <input type='text' name='q1' onChange={onChange} value={name} /> */}
    
    </form>
  );
}

Q1.propTypes = {
  onChange: PropTypes.func.isRequired,
  q1State: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

