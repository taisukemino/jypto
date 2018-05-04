'use strict';
import React, {Component} from 'react'
import {connect} from 'react-redux';
import CssBaseline from 'material-ui/CssBaseline'
import Header from './header';
import ContractDetail from '../containers/contract-detail';

class Contract extends Component {
  render() {
    const contract = this.props.contracts.find(c => c.contractId == this.props.match.params.contractId);
    return (<div>
      <CssBaseline/>
      <Header/>
      <ContractDetail contract={contract}/>
    </div>);
  }
}

function mapStateToProps(state) {
  return {contracts: state.contracts};
}

export default connect(mapStateToProps)(Contract);
