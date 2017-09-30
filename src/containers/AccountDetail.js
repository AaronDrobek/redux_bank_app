import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser, selectAccount, withdrawFunds} from '../actions/index';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Transaction from '../containers/Transaction'

class AccountDetail extends Component{
  constructor(){
    super();
    this.state = {transaction: false}
    this.openWithdrawl=this.openWithdrawl.bind(this)
  }

  openWithdrawl(event){
    this.setState({transaction: true})
  }
  render(){
        let output;
        if(this.state.transaction){
          output = <Transaction/>
        }


        console.log(this.state.transaction, "this is the transaction$$$$$$$$$$");
        console.log(this.props.account, "account details user!!!!!!!!!!!!!!!!!!!");
        console.log(this.props.user, "this is user&&&&&&&&&&&&&&&");
    return(
      <div>
      <div className="account">
        <h3>Account Information</h3>
        <p> {this.props.account.accountType} account for {this.props.user.name}</p>
        <p> Balance: {this.props.account.balance}</p>
        <button onClick={this.openWithdrawl}  className="btn-primary">Transaction Type</button>
        <Link   to={`/users/${this.props.user.id}`}><button className="btn-btn" style={{marginLeft: '1vw' }} >Back to {this.props.user.name} account </button></Link>
        <Link   to="/users" ><button className="btn-btn" style={{marginLeft: '1vw' }}>Back to List of Users</button></Link>
        </div>
        <div className="transaction">
          {output}
          </div>
        </div>
      )
    }
  }





  function mapStateToProps(state) {
    const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
    const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

    return {
      user: state.selectedUser,
      account: state.users[userIdx].accounts[accountIdx],
    };
  }


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount,
    selectUser: selectUser,

  }, dispatch)
}




export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetail);
