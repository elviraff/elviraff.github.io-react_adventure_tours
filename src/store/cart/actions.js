export const CartActions= {
    AddService : "cart/addService",
    RemoveService: "cart/removeService"
}

export const addService = (serviceId) => ({type: CartActions.AddService, payload: serviceId});
export const removeService = (serviceId) => ({type: CartActions.RemoveService, payload: serviceId});
