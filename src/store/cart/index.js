import { CartActions } from "./actions"

const initialState = {}

export const cartReducer = (state=initialState, action) => {
    switch (action?.type) {
        case CartActions.AddService :{
            return {
                ...state,
                [action.payload]: (state[action.payload] || 0)+1
            }
        }
        case CartActions.RemoveService : {
            if (!state[action.payload]) return {...state}
            if (state[action.payload] === 1) {
                delete state[action.payload]
                return {...state}
            }
            return {
                ...state,
                [action.payload]: state[action.payload]-1 
            } 
        }
        default : 
            return state
    }
}