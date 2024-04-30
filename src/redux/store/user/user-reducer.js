import { SET_USER_TYPE } from "./user.type"

export const INITIAL_STATE = {
    user : []
}

export const userReducer = (state = INITIAL_STATE,action = {})=> {
    const {type,payload} = action

    switch(type){
        case SET_USER_TYPE.SET_USER:
            return {...state, user:payload}
            default:
                return state
    }
}