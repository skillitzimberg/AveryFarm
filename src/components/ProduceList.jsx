import React from 'react';
import Produce from './Produce';


function ProduceList(props){
  return (
    <div>

          <ul>
            {props.selection.map((produce, index) =>

              <Produce item={produce} key={index}/>

            )}
          </ul>
    </div>
  );
}

export default ProduceList;
