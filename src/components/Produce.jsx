import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <p>
      {props.item}
    </p>
  );
}

Produce.propTypes = {
  item: PropTypes.string
};

export default Produce;
