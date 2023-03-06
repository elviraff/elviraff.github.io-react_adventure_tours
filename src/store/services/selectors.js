export const selectServiceModule =(state) => state.services;

export const selectServiceEntities = (state) => selectServiceModule(state).entities;

export const selectServiceIds = (state) => selectServiceModule(state).ids;

export const selectServiceById = (state, {serviceId}) => 
selectServiceEntities(state)[serviceId]

