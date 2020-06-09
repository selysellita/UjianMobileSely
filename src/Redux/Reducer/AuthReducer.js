const INITIAL_STATE = {
    username: '',
    dataKucing: [],
    image: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, username:action.payload
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