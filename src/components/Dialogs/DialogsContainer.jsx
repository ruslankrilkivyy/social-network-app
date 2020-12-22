import { connect } from 'react-redux';
import { addMessageAction } from '../../redux/dialogsReducer';
import { Dialogs } from '../Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    usersNames: state.dialogsReducer.usersNames,
    newMessages: state.dialogsReducer.newMessages,
    messages: state.dialogsReducer.messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageAction(message));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
