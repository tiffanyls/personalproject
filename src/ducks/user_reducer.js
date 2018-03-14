import axios from 'axios';

//const
const GET_USER = "GET_USER";


//action creators

export function getUser(){
    return {
        type: GET_USER,
        payload: axios
        .get("/api/me")
        .then(response => {
          return response.data;
        })
        .catch(console.log)
    }
}

const initialState = {
    user: [],
    isLoading: false,
    didErr: false,
    errMessage: null
};

export default function user_reducer(state = initialState, action){
    switch (action.type) {
        case `${GET_USER}_PENDING`:
            return Object.assign({}, state, {isLoading: true});

        case `${GET_USER}_FULFILLED`:
            return Object.assign({}, state, {
                isLoading: false,
                user: action.payload
            });
        
        case `${GET_USER}_REJECTED`:
            return Object.assign({}, state, {
                isLoading: false,
                didErr: true
            });
        default:
        return state;
    }
}