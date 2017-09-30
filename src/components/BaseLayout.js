import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component{
  render(){
    return(
      <div className="whole_view">
          <div className="navigation_content">
              <NavLink className="nav_button" activeClassName="selected" to='/users'>Users</NavLink>
              <NavLink className="nav_button" activeClassName="selected" to='/'>Home</NavLink>
            </div>
            <div className="main">

          <div className="jumbotron">
              {this.props.children}
                </div>
                </div>
      </div>
    )
  }
}
