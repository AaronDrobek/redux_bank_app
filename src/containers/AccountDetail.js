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
      <div>
        <h1>Account Information</h1>
        <p> {this.props.account.accountType} account for {this.props.user.name}</p>
        <p> Balance: {this.props.account.balance}</p>
        <button onClick={this.openWithdrawl} style={{backgroundColor: 'red'}} className="btn btn-primary">Withdraw Funds</button>
        <Link className="btn btn-primary" to={`/users/${this.props.user.id}`} >Back to User</Link>
        <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>
        </div>
          {output}
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
