import React, { Fragment } from 'react';

const Filter = () => {
  return (
    <Fragment className="Filter">
      <input
        type="text"
        placeholder="Filter by title"
      />

  <input
        type="text"
        placeholder="Filter by rate"
      />
    </Fragment>
  );
};

export default Filter;