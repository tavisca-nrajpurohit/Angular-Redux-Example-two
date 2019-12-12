export const USERNAME_IS_FOCUSSED = "usernameIsFocussed";
export const PASSWORD_IS_FOCUSSED = "passwordIsFocussed";
export const USERNAME_NOT_FOCUSSED = "usernameNotFocussed";
export const PASSWORD_NOT_FOCUSSED = "passwordNotFocussed";
export const USERNAME_VALUE_CHANGED = "usernameValueChanged";
export const PASSWORD_VALUE_CHANGED = "passwordValueChanged";


export function ACTION_usernameIsFocussed(){
    return {
        type: USERNAME_IS_FOCUSSED,
    }
}
export function ACTION_passwordIsFocussed(){
    return {
        type: PASSWORD_IS_FOCUSSED,
    }
}

export function ACTION_usernameNotFocussed(){
    return {
        type: USERNAME_NOT_FOCUSSED,
    }
}
export function ACTION_passwordNotFocussed(){
    return {
        type: PASSWORD_NOT_FOCUSSED,
    }
}

export function ACTION_usernameValueChanged(newValue){
    return {
        type: USERNAME_VALUE_CHANGED,
        value: newValue
    }
}

export function ACTION_passwordValueChanged(newValue){
    return {
        type: PASSWORD_VALUE_CHANGED,
        value: newValue
    }
}