import './index.css';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import {createStore} from 'redux';

const initialState =[
    'Do oe die',
    'Wake up'
];


function playList(state = initialState , action) {

    console.log('action: ',action);

    if (action.type = 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;

}

const store = createStore( playList );

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
