import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: 0,
    }
  }

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  }

  render() {
    return (
      <div>
        <h3 id='balance'>Wallet Balance: {this.props.balance}</h3>
        <be />
        <input id='input-wallet' onChange={this.updateBalance}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state,
  }
};

export default connect(mapStateToProps)(Wallet);
