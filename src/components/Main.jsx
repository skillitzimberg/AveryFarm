import React from 'react';
import Schedule from './Schedule';
import Harvests from './Harvests';
import ProduceList from './ProduceList';

function Main(){
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px solid #000;
          margin-top: 5px;
          padding: 10px;
          overflow: auto;
        }
        `}</style>
      <h1>Main Component</h1>
      <Schedule/>
      <ProduceList/>
    </div>
  );
}

export default Main;
