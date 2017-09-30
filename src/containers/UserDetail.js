import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';



class UserDetail extends Component {
  render() {
    if(!this.props.user) {

      return (

        <div>Please select a user...</div>
      )
    }
    let match = this.props.match
    //get user id from params of URL

    const { id } = this.props.user

    let accounts = this.props.user.accounts.map(account => {

    //map over the accounts for the user to create links to them.
    // let accounts = this.props.user.accounts.map(account => {

      //creating a Link with the account type for
      //each account.
      return (
        <div key={account.id}>
          <Link
            onClick={() => this.props.selectAccount(account)}
            to={`${match.url}/${account.id}/${account.accountType}`}><button className="btn-primary">
            {account.accountType}</button></Link>
        </div>

      )
    })
    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h4 className= "">{this.props.user.name}</h4>
            <div className= "card-text">
              <div>Email: {this.props.user.email}</div>
              <div>Phone: {this.props.user.phone}</div>
              <div>Address: {this.props.user.address}</div>

            </div>
            <p>Select Account:</p>
            {accounts}
          </div>
          <Link   to="/users" ><button style={{marginLeft: '2vw', marginBottom: ".5vw", backgroundColor: 'rgb(0,64,0)',
          color: 'white',
           textDecoration: 'none'}}>
          Back to List of Users</button></Link>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAccount: selectAccount,
    selectUser: selectUser,

  }, dispatch)
}
/*

You will need to create a mapDispatchToProps function here and
return the action creator selectAccount - HINT: see the UserList
component.

*/


export default connect(mapStateToProps,  mapDispatchToProps)(UserDetail);
