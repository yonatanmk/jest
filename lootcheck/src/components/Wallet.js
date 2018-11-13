import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

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

  deposit = () => {
    this.props.deposit(this.state.balance);
    // this.setState({ balance: 0 });
  }

  withdraw = () => {
    this.props.withdraw(this.state.balance);
    // this.setState({ balance: 0 });
  }

  render() {
    return (
      <div>
        <h3 id='balance'>Wallet Balance: {this.props.balance}</h3>
        <be />
        <input id='input-wallet' onChange={this.updateBalance} />
        <button id='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button id='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: (...params) => dispatch(deposit(...params)),
    withdraw: (...params) => dispatch(withdraw(...params)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
