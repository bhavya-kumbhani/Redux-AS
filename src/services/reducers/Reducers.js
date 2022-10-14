import { ADD_TO_CARD } from "../Constants";

const initialState = {
  cardData: [],
};
export const cardItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cardData: action.data,
      };
  }
};
