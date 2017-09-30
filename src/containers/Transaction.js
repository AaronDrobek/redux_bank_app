import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withdrawFunds} from '../actions/index';
import {depositFunds} from '../actions/index';
import {bindActionCreators} from 'redux';


class Transaction extends Component{
  constructor(props){
    super(props);
    this.subtractFive=this.subtractFive.bind(this);
    this.subtractTen=this.subtractTen.bind(this);
    this.subtractTwenty=this.subtractTwenty.bind(this);
    this.depositFive=this.depositFive.bind(this);
    this.depositTen=this.depositTen.bind(this);
    this.depositTwenty=this.depositTwenty.bind(this);
  }


  subtractFive(event){
    this.props.withdrawFunds(5)
  }
  subtractTen(event){
    this.props.withdrawFunds(10)
  }
  subtractTwenty(event){
    this.props.withdrawFunds(20)
  }
  depositFive(event){
    this.props.depositFunds(5)
  }
  depositTen(event){
    this.props.depositFunds(10)
  }
  depositTwenty(event){
    this.props.depositFunds(20)
  }

  render(){



    return(
      <div className='transaction_box'>
      <div>
      <h4> Choose Withdraw Amount </h4>
      <button onClick={this.subtractFive} style={{color: 'white',backgroundColor: 'blue'}}className="btn btn-primary"> $5</button>
      <button onClick={this.subtractTen} style={{color: 'white', backgroundColor: 'green'}}className="btn btn-primary"> $10</button>
      <button onClick={this.subtractTwenty} style={{color: 'white', backgroundColor: 'orange'}}className="btn btn-primary"> $20</button>
      <button style= {{color: 'white', backgroundColor: 'red', marginLeft: "2vw"}}><Link  style={{color: "white", textDecoration: 'none'}} to={`/users/${this.props.user.id}`} >Cancel</Link></button>
      </div>
      <div>
      <h4> Choose Deposit Amount</h4>
      <button onClick={this.depositFive} style={{color: 'white', backgroundColor: 'blue'}}className="btn btn-primary"> $5</button>
      <button onClick={this.depositTen} style={{color: 'white', backgroundColor: 'green'}}className="btn btn-primary"> $10</button>
      <button onClick={this.depositTwenty} style={{color: 'white', backgroundColor: 'orange'}}className="btn btn-primary"> $20</button>
      <button style= {{color: 'white', backgroundColor: 'red', marginLeft: "2vw"}}><Link  style={{color: "white", textDecoration: 'none'}} to={`/users/${this.props.user.id}`} >Cancel</Link></button>

      </div>
      </div>
    )
  }
}




function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  const userIdxL = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdxL = state.users[userIdxL].accounts.findIndex(account => account.id === state.selectedAccount.id);
  console.log(userIdxL, "this is user._id %%%%%%%%%%%%%%%%reducers");
  console.log(accountIdxL, "this is account.id%%%%%%%%%%%%reducers");
  return {
    user: state.selectedUser,
    account: state.users[userIdx].accounts[accountIdx],
    account2: state.users[userIdxL].accounts[accountIdxL]

  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds,
        depositFunds: depositFunds,
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
