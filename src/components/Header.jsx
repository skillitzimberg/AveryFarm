import React from 'react';
import HeaderNav from './HeaderNav';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px solid #000;
        }
        `}</style>
      <h1>&hearts; Avery&apos;s Farm &hearts;</h1>
      <HeaderNav/>
    </div>
  );
}

export default Header;
