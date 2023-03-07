import { normalizedReviews } from "../../constants/normalized_fixtures";

const initialState = {
    entities: normalizedReviews.reduce((acc, review)=>{
        acc[review.id] = review;
        return acc;
    },{}),
    ids: normalizedReviews.map(({id}) => id)
}

export const reviewsReducer = (state=initialState, action) => {
    switch (action?.type) {
        default:
            return state
    }
}