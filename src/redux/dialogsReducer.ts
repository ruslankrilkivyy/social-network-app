const ADD_MESSAGE = 'ADD_MESSAGE';

type MessagesType = {
  id: number;
  message: string;
};

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
  ] as Array<MessagesType>,
  newMessages: null as string | null,
  usersNames: ['Sasha', 'Ruslan', 'Artem', 'Denis', 'Victor'] as Array<string> | null,
};

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
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

type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  newMessage: string | null;
};

export const addMessageAction = (newMessage: string): AddMessageActionType => ({
  type: ADD_MESSAGE,
  newMessage,
});

export default dialogsReducer;
