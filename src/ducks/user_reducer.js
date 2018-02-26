import axios from 'axios';

//const
const GET_USERS = "GET_USERS";


//action creators

export function getUsers(){
    return {
        type: GET_USERS,
        payload: axios
        .get("/api/test")
        .then(response => {
          return response.data;
        })
        .catch(console.log)
    }
}

const initialState = {
    users: [],
    isLoading: false,
    didErr: false,
    errMessage: null
};

export default function user_reducer(state = initialState, action){
    switch (action.type) {
        case `${GET_USERS}_PENDING`:
            return Object.assign({}, state, {isLoading: true});

        case `${GET_USERS}_FULFILLED`:
            return Object.assign({}, state, {
                isLoading: false,
                user: action.payload
            });
        
        case `${GET_USERS}_REJECTED`:
            return Object.assign({}, state, {
                isLoading: false,
                didErr: true
            });
        default:
        return state;
    }
}