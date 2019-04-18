import React from 'react';
import PropTypes from 'prop-types';

export default function Q2({ onChange, q2State }) {
  return (
    <section>
      <h3>When working with Github you should Always push to Master</h3>
      <label>
        <input
          type="radio"
          name='q2'
          value="true"
          checked={q2State === 'true'}
          onChange={onChange}
        />
          True
      </label>
      <label>
        <input
          type="radio"
          name='q2'
          value="false"
          checked={q2State === 'false'}
          onChange={onChange}
        />
          False
      </label>
      
    </section>
  );
}

Q2.propTypes = {
  onChange: PropTypes.func.isRequired,
  q2State: PropTypes.string.isRequired
};






