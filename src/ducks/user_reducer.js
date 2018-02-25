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

}

export default function user_reducer(state = initialState, action){
    switch (action.type) {
        default:
        return state;
    }
}