const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  messages: [
    {
      id: 1,
      message: 'Hi!',
    },
    {
      id: 2,
      message: 'How Are you?',
    },
    {
      id: 3,
      message: 'Do you have time for me?',
    },
  ],
  newMessages: [],
  usersNames: ['Sasha', 'Ruslan', 'Artem', 'Denis', 'Victor'],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessages: '',
        messages: [...state.messages, { id: 4, message: action.newMessage }],
      };

    default:
      return state;
  }
};

export const addMessageAction = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;
