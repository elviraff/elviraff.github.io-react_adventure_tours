
import { tourSlice } from ".."
import { normalize } from "../../utils/normalize"
import { failedTours, inProgressTours, successTours, TourActions } from "../actions"

export const loadTourIfNotExist = (store) => (next) => (action) => {
    if (action.type !== TourActions.load) {
       next(action)
       return 
    }

    store.dispatch(tourSlice.actions.startLoading())

    fetch ("https://raw.githubusercontent.com/elviraff/sources_for_projects/main/tours.json")
        .then((response) => response.json()) 
        .then((tours) => {
            console.log(tours);
            if (tours?.length){
            store.dispatch(tourSlice.actions.finishLoading(normalize(tours)))
            }
        })
        .catch((error) => {
            store.dispatch(tourSlice.actions.failLoading())
        })
}