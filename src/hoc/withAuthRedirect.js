import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />;

      return <Component {...this.props} />;
    }
  }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authReducer.isAuth,
  });

  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return connectedAuthRedirectComponent;
};
