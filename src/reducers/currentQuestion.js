import { MOVE_TO_NEXT } from '../actions/currentQuestion';

const initialState = { answer: 1 };

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_NEXT:
      return { answer: action.current + 1 };
    default:
      return state;
  }
};
