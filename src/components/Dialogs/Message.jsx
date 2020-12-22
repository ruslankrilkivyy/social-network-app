import React from 'react';

function Message({ messages }) {
  return messages.map((item, index) => (
    <div className="dialogs__messages-item" key={index}>
      {item.message}
    </div>
  ));
}

export default Message;
