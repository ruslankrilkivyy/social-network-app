import SideBar from './SideBar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    menuItems: state.menuReducer.menuItems,
  };
};

let mapStateToDispatch = (dispatch) => {
  return {};
};

const SideBarContainer = connect(mapStateToProps, mapStateToDispatch)(SideBar);

export default SideBarContainer;
