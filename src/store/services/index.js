import { normalizedServices } from "../../constants/normalized_fixtures"

const initialState = {
    entities: normalizedServices.reduce((acc, service)=>{
        acc[service.id] = service;
        return acc;
    },{}),
    ids: normalizedServices.map(({id}) => id)
}

export const servicesReducer = (state=initialState, action) => {
    switch (action?.type) {
        default:
            return state
    }
}