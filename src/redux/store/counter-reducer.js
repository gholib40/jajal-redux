import { INCEMENT } from "./type"
export const INITIAL_STATE = {
    counter : 0,
}

export const counterReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
    case INCEMENT.increment :
        return {...state, counter : state.counter +1}
        default :
        return state
    }
}

