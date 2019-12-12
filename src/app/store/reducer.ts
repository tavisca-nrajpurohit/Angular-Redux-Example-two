import {appState} from "./appState";
import { USERNAME_IS_FOCUSSED,USERNAME_NOT_FOCUSSED,USERNAME_VALUE_CHANGED,PASSWORD_IS_FOCUSSED,PASSWORD_NOT_FOCUSSED,PASSWORD_VALUE_CHANGED } from './actions';

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

function usernameIsFocussed(state:appState,action):appState{
    return Object.assign({},state,{
        username:{
            value: state.username.value,
            isTouched: true,
            hasFocus: true
        }
    });
}

function passwordIsFocussed(state:appState,action):appState{
    return Object.assign({},state,{
        password:{
            value: state.password.value,
            isTouched: true,
            hasFocus: true
        }
    });
}

function passwordValueChanged(state:appState,action):appState{
    return Object.assign({},state,{
        password:{
            value: action.value,
            isTouched: state.password.isTouched,
            hasFocus: state.password.hasFocus
        }
    });
}

function usernameValueChanged(state:appState,action):appState{
    return Object.assign({},state,{
        username:{
            value: action.value,
            isTouched: state.username.isTouched,
            hasFocus: state.username.hasFocus
        }
    });
}

function usernameNotFocussed(state:appState,action):appState{
    return Object.assign({},state,{
        username:{
            hasFocus: false,
            isTouched: state.username.isTouched,
            value: state.username.value
        }
    });
}

function passwordNotFocussed(state:appState,action):appState{
    return Object.assign({},state,{
        password:{
            hasFocus: false,
            isTouched: state.password.isTouched,
            value: state.password.value,
        }
    });
}

export function reducer(state = initialState, action){
    switch(action.type){
        case USERNAME_IS_FOCUSSED:
            return usernameIsFocussed(state,action);
            break;
        case PASSWORD_IS_FOCUSSED:
                return passwordIsFocussed(state,action);
                break;
        case USERNAME_VALUE_CHANGED:
                return usernameValueChanged(state,action);
                break;
        case PASSWORD_VALUE_CHANGED:
                return passwordValueChanged(state,action);
                break;
        case USERNAME_NOT_FOCUSSED:
                return usernameNotFocussed(state,action);
                break;
        case PASSWORD_NOT_FOCUSSED:
                return passwordNotFocussed(state,action);
                break;
        default:
            return state;
    }
}