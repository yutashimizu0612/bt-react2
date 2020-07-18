import { MOVE_TO_NEXT } from '../actions/currentQuestion';

const initialState = { answer: 1 };

export default (state = initialState, { type, current }) => {
  switch (type) {
    case MOVE_TO_NEXT:
      return { answer: current + 1 };
    default:
      return state;
  }
};
