'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import $ from 'jquery';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
import jsBeautify from 'js-beautify';
import Share from '../images/share.svg';
import Twitter from '../images/twitter.svg';
import EmailBg from '../images/email-bg.svg'
import Link from '../images/link.svg'
import Facebook from '../images/facebook.svg'
import Tag from '../images/tag.svg';
import Reddit from '../images/reddit.svg'
import Telegram from '../images/telegram.svg';
import Website from '../images/website.svg';
import Email from '../images/email.svg';
import ExternalLink from '../images/external-link.svg';
import Flag from '../images/flag.svg';

class ContractDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.copyTheLinkToClipboard = this.copyTheLinkToClipboard.bind(this);
  }
  toggleClass() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  copyTheLinkToClipboard() {
    var id = this.props.contract.contractId;
    var textField = document.createElement('textarea')
    textField.innerText = 'https://jypto.io/contract/' + id;
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    {this.copyTheLinkToClipboardAnimation()}
  }
  copyTheLinkToClipboardAnimation() {
    const copyAnimationElement = $('.contract .share-link');

    copyAnimationElement.addClass('animated tada');

    copyAnimationElement.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      copyAnimationElement.removeClass('animated tada');
    });
  }
  jsBeautify() {
    var val = this.props.contract.code;
    // Remove leading spaces
    var array = val.split(/\n/);
    array[0] = array[0].trim();
    val = array.join("\n");
    //Actual beautify (prettify)
    val = jsBeautify(val);
    //Change current text to formatted text
    return val;
  }
  render() {
    const contract = this.props.contract;

    if (!contract) {
      return ('')
    }

    return (<div className="contract">
      <div className={`contract-bg-${contract.contractId % 5 == 0 ? 5 : contract.contractId % 5} ${contract.category} contract-box`}>
        <div className={`share-icons ${ (this.state.isActive)
            ? 'share-icons-animation'
            : ''}`}>
          <a className="share-graph" onClick={() => this.toggleClass()}><Share/></a>
          <a href={`https://twitter.com/share?text=I am sharing a smart contract from jypto.io&url=https://jypto.io/contract/${contract.contractId}&hashtags=jypto`} target="_blank">
            <Twitter/>
          </a>
          <a href={`mailto:?subject=Let me share the smart contract in Jypto!&body=https://jypto.io/contract/${contract.contractId}`} target="_blank">
            <EmailBg/>
          </a>
          <a className="share-link" onClick={() => this.copyTheLinkToClipboard()} target="_blank">
            <Link/>
          </a>
        </div>
        <h2 className="title">{contract.title}</h2>
        <ul>
          <li className="tag">
            <Tag/>
            <span className="tag-name">{contract.tag}</span>
          </li>
          <li className="author">
            <span className="author-by">by</span>
            {contract.author}
          </li>
        </ul>
      </div>
      <div className="contract-bottom">
        <div className="official-links">
          <h4>Official Links</h4>
          <ul>
            <li>
              <a href={contract.officialLinks.Reddit} target="_blank">
                <Reddit/>
              </a>
            </li>
            <li>
              <a href={contract.officialLinks.Telegram} target="_blank">
                <Telegram/>
              </a>
            </li>
            <li>
              <a href={contract.officialLinks.Website} target="_blank">
                <Website/>
              </a>
            </li>
            <li>
              <a href={contract.officialLinks.Email} target="_blank">
                <Email/>
              </a>
            </li>
            <li>
              <a href={contract.officialLinks.Twitter} target="_blank">
                <Twitter/>
              </a>
            </li>
          </ul>
        </div>
        <div className="contract-source">
          <h4>Verified Contract Source<a className="etherscan-link" href={contract.EtherscanLink} target="_blank"><ExternalLink/></a>
          </h4>
          <AceEditor id="ace-editor" ref="aceEditor" mode="javascript" theme="tomorrow" readOnly={true} editorProps={{
              $blockScrolling: true
            }} wrapEnabled={true} width="100%" showPrintMargin={true} showGutter={true} highlightActiveLine={true} value={this.jsBeautify()} setOptions={{
              showLineNumbers: true
            }}/>
          <a className="report" href="mailto:stereophonics0215@gmail.com?subject=Report The Contract&body=Hi Jypto Team, I am reporting this contract because" target="_blank">
            <Flag/>
            <span className="report-name">Report this contract</span>
          </a>
        </div>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {contracts: state.contracts};
}

export default connect(mapStateToProps)(ContractDetail)
