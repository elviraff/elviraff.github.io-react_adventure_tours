import { createSlice } from "@reduxjs/toolkit"
import { LoadingStatuses } from "../constants/statuses"


const initialState = {
    entities: {},
    ids: [],
    status: LoadingStatuses.idle
}

export const tourSlice = createSlice({
    name:'tour',
    initialState,
    reducers: {
        startLoading: (state) =>{
            state.status = LoadingStatuses.inProgress
        },
        failLoading: (state) => {
            state.status = LoadingStatuses.failed
        },
        finishLoading: (state, {payload: {entities, ids}}) => {
            state.status = LoadingStatuses.success;
            state.entities = entities;
            state.ids = ids;
        },
    },
})

