const initialState = {
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
      name: 'Users',
    },
    {
      name: 'Settings',
    },
  ],
};

const menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
