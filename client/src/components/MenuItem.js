import React from 'react';

const MenuItem = props => (
  <div>
    <h3>{props.item}</h3>
    <p>{props.description}</p>
  </div>
);

export default MenuItem;