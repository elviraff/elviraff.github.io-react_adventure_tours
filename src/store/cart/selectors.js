export const selectCartModule = (state) => state.cart;

export const selectCartServiceIds = (state) => Object.keys(selectCartModule(state))

export const selectServiceCountById = (state, {serviceId}) => 
    selectCartModule(state)[serviceId] || 0;
