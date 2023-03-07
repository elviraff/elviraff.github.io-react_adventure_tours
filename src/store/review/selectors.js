export const selectReviewModule =(state) => state.reviews;

export const selectReviewEntities = (state) => selectReviewModule(state).entities;

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewById = (state, {reviewId}) => 
    selectReviewEntities(state)[reviewId]