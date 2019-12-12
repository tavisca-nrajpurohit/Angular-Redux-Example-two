import {appState} from "./appState";

const initialState: appState = {
    username:{
        value: "",
        isTouched: false,
        hasFocus: false,
    },
    password:{
        value: "",
        isTouched: false,
        hasFocus: false,
    }
};

export function reducer(state = initialState, action){
    switch(action.type){
        case "usernameIsFocussed":
            state.username.isTouched = true;
            state.username.hasFocus = true;
            break;
        case "passwordIsFocussed":
                state.password.isTouched = true;
                state.password.hasFocus = true;
                break;
        case "usernameValueChanged":
                state.username.value = action.value;
                break;
        case "passwordValueChanged":
                state.password.value = action.value;
                break;
        case "usernameNotFocussed":
                state.username.hasFocus = true;
                break;
        case "passwordNotFocussed":
                state.password.hasFocus = true;
                break;
        default:
            return state;
    }
}