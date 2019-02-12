import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <li>
    <style jsx>{`
      li {
        list-style: none;
      }
      `}</style>
    {props.item}</li>
  );
}

Produce.propTypes = {
  item: PropTypes.string
};

export default Produce;
