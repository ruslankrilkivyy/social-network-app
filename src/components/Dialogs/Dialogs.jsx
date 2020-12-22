import React from 'react';

import { AddMessage, Message, DialogItem } from '../Dialogs';

function Dialogs({ getMessageValue, addMessage, usersNames, messages, newMessages, isAuth }) {
  const [activeUser, setActiveUser] = React.useState(0);

  const handleActiveUser = (index) => {
    setActiveUser(index);
  };

  return (
    <div className="dialogs">
      <div className="dialogs__users">
        <DialogItem
          usersNames={usersNames}
          activeUser={activeUser}
          onChangeActiveUser={handleActiveUser}
        />
      </div>
      <div className="dialogs__messages">
        <Message messages={messages} />
        <div className="dialogs__messages-add">
          <AddMessage
            newMessages={newMessages}
            getMessageValue={getMessageValue}
            addMessage={addMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
