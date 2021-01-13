export const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const Login = {
    login: item => {
        return {type: types.LOGIN, payload: item}
    },
}

export const Logout = {
    logout: () => {
        return {type: types.LOGOUT, payload: ""}
    },
}

const initialState = {
    userName: '',
}

export const reducer = (state = initialState, action) => {
    const {userName} = state
    const {type, payload} = action

    switch (type) {
        case types.LOGIN:
            return {
                ...state,
                userName: [payload, userName],
            };

        case types.LOGOUT:
            return {
                ...state,
                userName: "",
            };
        default :
            return state;
    }
}