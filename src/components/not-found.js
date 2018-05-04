'use strict';
import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (<div className="page-404">
  <center>
    <h1>404</h1>
    <h1>WHOOPS!</h1>
    <p>Looks like you are lost.</p>
    <p>Take it easy and carry on to <Link to="/">Home</Link> &#128515;</p>
  </center>
</div>);

export default NotFound;
