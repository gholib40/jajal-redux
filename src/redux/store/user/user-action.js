import { createAction } from "../createAction"
import { SET_USER_TYPE } from "./user.type"
export const setUser = (user)=> createAction(SET_USER_TYPE.SET_USER,user)