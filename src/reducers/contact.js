import {
  SELECT_GENDER,
  SELECT_BIRTH_YEAR,
  SELECT_BIRTH_MONTH,
  SELECT_BIRTH_DAY,
  ANSWER_QUESTION,
  INPUT_CONTACT_DETAIL,
} from '../actions';

// contact = {
//   customer: {
//     gender: male,
//     birthdate: {
//       year: 1988,
//       month: 6,
//       day: 12,
//     },
//   },
//   question: {
//     1: true,
//     2: true,
//     3: false,
//   },
//   detail: '入力した内容',
// };

const initialState = {
  gender: '',
  birthdate: {
    year: '',
    month: '',
    day: '',
  },
  question: {
    1: '',
    2: '',
    3: '',
  },
  detail: '入力した内容',
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENDER:
      return {
        ...state,
        gender: action.value,
      };
    case SELECT_BIRTH_YEAR:
      return {
        ...state,
        birthdate: {
          ...state.birthdate,
          year: action.value,
        },
      };
    case SELECT_BIRTH_MONTH:
      return {
        ...state,
        birthdate: {
          ...state.birthdate,
          month: action.value,
        },
      };
    case SELECT_BIRTH_DAY:
      return {
        ...state,
        birthdate: {
          ...state.birthdate,
          day: action.value,
        },
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        question: {
          ...state.question,
          [action.num]: action.value,
        },
      };
    case INPUT_CONTACT_DETAIL:
      return {
        ...state,
        detail: action.value,
      };
    default:
      return state;
  }
};

export default contact;
