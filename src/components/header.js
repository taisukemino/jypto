'use strict';
import React from 'react';
import Headroom from 'react-headroom';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

const Header = function() {
  return (<Headroom className="header">
    <h3>
      <Link to="/"><img src={logo} alt="jypto logo"/></Link>
    </h3>
  </Headroom>);
}

export default Header;
