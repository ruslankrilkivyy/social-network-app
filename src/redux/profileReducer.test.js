import profileReducer, { addPostAction, deletePost } from './profileReducer';
import ReactDOM from 'react-dom';
import React from 'react';

let state = {
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
};

it('length of posts should be incremented', () => {
  let action = addPostAction('it-kamasutra.com');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});

it('length of posts should be decremented', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

it('message of new post should be it-kamasutra.com', () => {
  let action = addPostAction('it-kamasutra.com');
  let newState = profileReducer(state, action);
  expect(newState.posts[3].post).toBe('it-kamasutra.com');
});
