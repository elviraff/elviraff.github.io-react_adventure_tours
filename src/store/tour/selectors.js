import { LoadingStatuses } from "../constants/statuses";

export const selectTourModule = (state) => state.tour;

export const selectTourEntities = (state) => selectTourModule(state).entities;

export const selectTourIdsFilteredByName = (state, {searchValue}) => 
Object.values(selectTourEntities(state)).reduce((acc, {id, name}) => {
    if (name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
        acc.push(id)
    }
    return acc
}, [])

export const selectTourIds = (state) => selectTourModule(state).ids;

export const selectTourById = (state, {tourId}) => 
    selectTourEntities(state)[tourId]

export const selectTourServicesIdsById = (state, {tourId}) => 
selectTourById(state, {tourId}).services

export const selectTourReviewsIdsById = (state, {tourId}) => 
selectTourById(state, {tourId}).reviews

export const selectTourLoadingStatuses = (state) => selectTourModule(state).status

export const selectIsTourLoading = (state) => selectTourLoadingStatuses(state) === LoadingStatuses.inProgress