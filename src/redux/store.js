import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import menuReducer from './menuReducer';
import friendsReducer from './friendsReducer';

let store = {
  _state: {
    dialogs: {
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
    },
    sideBar: {
      menuItems: [
        {
          name: 'Profile',
        },
        {
          name: 'Messages',
        },
        {
          name: 'Friends',
        },
        {
          name: 'News',
        },
        {
          name: 'Music',
        },
        {
          name: 'Settings',
        },
      ],
    },
    profile: {
      posts: [
        {
          id: 1,
          avatar:
            'https://www.businessinsider.in/photo/77513577/Why-its-so-worrying-that-the-original-Avatar-The-Last-Airbender-creators-are-no-longer-in-charge-of-Netflixs-live-action-show.jpg?imgsize=55133',
          post: 'Hey, how are you?',
        },
        {
          id: 2,
          avatar: 'https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=750&format=jpeg&auto=webp',
          post: 'Do you like games?',
        },
        {
          id: 3,
          avatar:
            'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          post: 'I know React Js',
        },
      ],
      newPosts: [],
    },
    friends: {
      friendsItems: [
        {
          id: 1,
          name: 'Artem',
          avatar:
            'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
        },
        {
          id: 2,
          name: 'Denis',
          avatar:
            'https://www.businessinsider.in/photo/77513577/Why-its-so-worrying-that-the-original-Avatar-The-Last-Airbender-creators-are-no-longer-in-charge-of-Netflixs-live-action-show.jpg?imgsize=55133',
        },
        {
          id: 3,
          name: 'Edward',
          avatar: 'https://i.insider.com/5c8045a4d2ce7802a110ce7b?width=750&format=jpeg&auto=webp',
        },
        {
          id: 4,
          name: 'Victor',
          avatar:
            'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.friends = friendsReducer(this._state.friends, action);
    this._state.sideBar = menuReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

// export default store;
