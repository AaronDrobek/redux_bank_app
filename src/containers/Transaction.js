import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


class Transaction extends Component{
  render(){
    return(
      <div className='transaction_box'>

      <h1> Choose Withdraw Amount </h1>
      <button style={{backgroundColor: 'blue'}}className="btn btn-primary"> $5</button>
      <button style={{backgroundColor: 'green'}}className="btn btn-primary"> $10</button>
      <button style={{backgroundColor: 'orange'}}className="btn btn-primary"> $20</button>
      <Link style={{backgroundColor: 'red'}} className="btn btn-primary" to={`/users/${this.props.user.id}`} >Cancel</Link>


      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    account: state.selectedAccount,
    user: state.selectedUser
  };
}
function mapDispatchToProps(dispatch) {
  
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
