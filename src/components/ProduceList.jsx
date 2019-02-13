import React from 'react';
import Produce from './Produce';
import PropTypes from 'prop-types';


function ProduceList(props){
  return (
    <div>


      {props.selection.map((produce, index) =>

        <Produce item={produce} key={index}/>

      )}

    </div>
  );
}

ProduceList.propTypes = {
  selection: PropTypes.array
};

export default ProduceList;
