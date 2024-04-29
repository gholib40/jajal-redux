import { createAction } from "./createAction"
import { INCEMENT } from "./type"

export const setCounter = () => createAction(INCEMENT.increment)