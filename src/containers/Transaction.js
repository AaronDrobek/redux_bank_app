import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withdrawFunds} from '../actions/index'
import {bindActionCreators} from 'redux'


class Transaction extends Component{
  constructor(props){
    super(props);
    this.subtractFive=this.subtractFive.bind(this);
    this.subtractTen=this.subtractTen.bind(this);
    this.subtractTwenty=this.subtractTwenty.bind(this);
  }


  subtractFive(event){
    this.props.withdrawFunds(5)
    console.log(this.props.account.balance, 'this is balance@@@@@@@@@@@@@@@@@@@');
    console.log(this.props.user, 'this is balance of selectedUser@@@@@@@@@@@@@@@');
  }
  subtractTen(event){
    this.props.withdrawFunds(10)
  }
  subtractTwenty(event){
    this.props.withdrawFunds(20)
  }
  render(){



    return(
      <div className='transaction_box'>

      <h1> Choose Withdraw Amount </h1>
      <button onClick={this.subtractFive} style={{backgroundColor: 'blue'}}className="btn btn-primary"> $5</button>
      <button onClick={this.subtractTen} style={{backgroundColor: 'green'}}className="btn btn-primary"> $10</button>
      <button onClick={this.subtractTwenty} style={{backgroundColor: 'orange'}}className="btn btn-primary"> $20</button>
      <Link style={{backgroundColor: 'red'}} className="btn btn-primary" to={`/users/${this.props.user.id}`} >Cancel</Link>
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
        withdrawFunds: withdrawFunds,
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
