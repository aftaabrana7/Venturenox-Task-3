import { GET_USERS_SUCCESS } from "./action";

const useReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
        return { ...state, users: action.users }
        default:
            return state;
    }
};

export default useReducer;