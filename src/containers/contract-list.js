'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import Tag from '../images/tag.svg';

class ContractList extends Component {
  render() {
    return (<Grid className="contract-list">
      <Row>
        {
          this.props.contracts.map(contract => (<Col className={`${contract.category} contract-list-box`} xs={12} sm={12} md={6} lg={4}>
            <Link key={contract.contractId} to={`/contract/${contract.contractId}`}>
            <div className="contract-list-box-bg">
                <h2 className="title">{contract.title}</h2>
                <ul className="contract-list-box-bottom">
                  <li className="tag">
                    <Tag />
                    <span className="tag-name">{contract.tag}</span></li>
                  <li className="author">by {contract.author}</li>
                </ul>
            </div>
            </Link>
          </Col>))
        }
      </Row>
    </Grid>);
  }
}

function mapStateToProps(state) {
  return {contracts: state.contracts};
}

export default connect(mapStateToProps)(ContractList)
