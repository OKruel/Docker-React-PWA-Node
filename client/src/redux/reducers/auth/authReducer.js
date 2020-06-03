import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    user: '',
    userRegistered: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_REGISTER:
            return {
                ...state,
                userRegistered: action.payload
            }
        case ACTION_TYPES.USER_LOGGEDIN:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_TYPES.USER_LOGOUT:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    };
};

export default authReducer;