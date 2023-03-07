export const selectUserModule =(state) => state.users;

export const selectUserEntities = (state) => selectUserModule(state).entities;

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserById = (state, {userId}) => 
    selectUserEntities(state)[userId]