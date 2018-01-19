import React, { Component } from 'react';
import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
  loginPath: '/login',
  signUpPath: '/signup',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/')
});

class UserBar extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class Header extends Component {

  render() {
    let renderthis = Meteor.userId() ? <UserBar /> : <Accounts.ui.LoginForm /> 
    return (
      <div style={s.base}>
        {renderthis}
      </div>
    );
  }
}

var s = {
  base: {
  },
}

export default Header;
