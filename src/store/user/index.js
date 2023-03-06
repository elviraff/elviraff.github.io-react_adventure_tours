import { normalizedUsers } from "../../constants/normalized_fixtures";

const initialState = {
    entities: normalizedUsers.reduce((acc, user)=>{
        acc[user.id] = user;
        return acc;
    },{}),
    ids: normalizedUsers.map(({id}) => id)
}

export const usersReducer = (state=initialState, action) => {
    switch (action?.type) {
        default:
            return state
    }
}