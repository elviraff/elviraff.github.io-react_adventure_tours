import { applyMiddleware, combineReducers, createStore} from "redux"
import { cartReducer } from "./cart"
import { reviewsReducer } from "./review"
import { servicesReducer } from "./services"
import { tourReducer, tourSlice } from "./tour"
import { loadTourIfNotExist } from "./tour/middleware/loadTourIfNotExist"
import { usersReducer } from "./user"
import {configureStore} from '@reduxjs/toolkit'

// import { createStore } from "../components/CustomStore"




const rootReducer = combineReducers({
    cart: cartReducer,
    tour: tourSlice.reducer,
    services: servicesReducer,
    reviews: reviewsReducer,
    users: usersReducer
})



export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [loadTourIfNotExist],
})


