import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SideBarContainer from './components/SideBar/SideBarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import './scss/style.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { getAuthAcces } from './redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import withSuspense from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

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
              <Route path="/" exact render={withSuspense(ProfileContainer)} />
              <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
              <Route path="/messages" render={withSuspense(DialogsContainer)} />
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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    getAuthAcces,
  }),
)(App);

const MainApp = () => {
  return (
    <Router>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </Router>
  );
};

export default MainApp;
