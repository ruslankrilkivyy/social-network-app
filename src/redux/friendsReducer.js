const initialState = {
  friendsItems: [
    {
      id: 1,
      name: 'Artem',
      avatar: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
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
};

const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
