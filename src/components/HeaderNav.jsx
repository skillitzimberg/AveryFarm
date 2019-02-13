import React from 'react';

function HeaderNav(){
  return (
    <div>
    <style jsx>{`

      ul {
        margin: 0;
      }

      li {
        display: inline;
        margin: 10px;
        letter-spacing: 2px;
      }

      a {
        text-decoration: none;
        color: #333;
      }

      a:after {
        color: #333;
      }
    `}</style>
      <ul>
        <li> <a href="#">Markets</a> </li>
        <li> <a href="#">Harvests</a> </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
