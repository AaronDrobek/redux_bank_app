//React imports
import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js'
import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';

class UserList extends Component {
    render() {
        let match = this.props.match
        let users = this.props.users.map((user) => {
            console.log(this.props.users, "this is users in UserList");
            return (

                <li className="list-group-item" key={user._id}  onClick={() => this.props.selectUser(user)}>
                  <Link className="list-group-item" to={`${match.url}/${user._id}`}>{user.name}</Link>
                </li>
            );
        });
        return (

            <div className="">
              <h5>Users with open accounts:</h5>
              <ul className="list-group-item" >
                {users}
              </ul>
              <Link to="/"><button style={{marginLeft: '2vw' }} className='btn-btn'>Home</button></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
