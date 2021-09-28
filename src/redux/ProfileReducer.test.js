import {profileReducer ,addPostActionCreater,deletePost} from "./ProfileReducer";
import { render, screen } from '@testing-library/react';
import React from 'react';

let state = {
    postsData: [
        {id:1 ,message: "Hello1" , likesCount: 15},
        {id:2 ,message: "Hi, how are you?",likesCount: 100 },
        {id:3 ,message: "It's my first post!", likesCount: 0}
      ],
};

test('new post should be added', () => {
    // 1. start data
    let action= addPostActionCreater("react ks");

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expaction

    expect(newState.postsData.length).toBe(4);
});

test('message of new posts should be - `react ks`', () => {
    // 1. start data
    let action= addPostActionCreater("react ks");

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expaction

    expect(newState.postsData[3].message).toBe("react ks");
});

test('after deleting lengt of message to be should increment', () => {
    // 1. start data
    let action= deletePost(1);

    // 2. action
    let newState = profileReducer(state,action);

    // 3. expaction

    // expect(newState.postsData[3].message).toBe("react ks");
});

