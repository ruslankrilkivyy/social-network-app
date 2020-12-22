import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import './scss/style.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { getAuthAcces } from './redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';

function App({ getAuthAcces, initialized }) {
  React.useEffect(() => {
    getAuthAcces();
  }, []);

  if (!initialized) {
    <Preloader />;
  }

  return (
    <Fragment>
      <HeaderContainer />
      <section className="content">
        <div className="container">
          <div className="content__wrapper">
            <SideBarContainer />
            <div className="content__main">
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/messages" render={() => <DialogsContainer />} />
              <Route path="/friends" render={() => <FriendsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

let mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getAuthAcces,
  }),
)(App);
