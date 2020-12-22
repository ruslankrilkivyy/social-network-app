import React from 'react';
import Header from './Header';
import { logout } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
