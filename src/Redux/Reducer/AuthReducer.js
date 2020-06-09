const INITIAL_STATE = {
    username: '',
    dataKucing: [],
    image: '',
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload
            }
        case 'GET_DATA':
            return {
                ...state,
                dataKucing: action.payload
            }
        case 'IMAGE':
            return {
                ...state,
                image: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                username: ''
            }
        default:
            return state;
    }
}