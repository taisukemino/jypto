'use strict';
import React from 'react';
import {Component} from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Header from './header';
import ContractList from '../containers/contract-list';

export default class Home extends Component {
  render() {
    return (<div>
      <CssBaseline/>
      <Header/>
      <div className="home-heading">
        <hr/>
        <h1>Explore smart contracts</h1>
      </div>
      <ContractList/>
    </div>);
  }
}
