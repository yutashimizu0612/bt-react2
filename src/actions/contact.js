export const SELECT_GENDER = 'SELECT_GENDER';
export const SELECT_BIRTH_YEAR = 'SELECT_BIRTH_YEAR';
export const SELECT_BIRTH_MONTH = 'SELECT_BIRTH_MONTH';
export const SELECT_BIRTH_DAY = 'SELECT_BIRTH_DAY';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INPUT_CONTACT_DETAIL = 'INPUT_CONTACT_DETAIL';

export const selectGender = value => {
  return {
    type: 'SELECT_GENDER',
    value,
  };
};

export const selectBirthYear = value => {
  return {
    type: 'SELECT_BIRTH_YEAR',
    value,
  };
};

export const selectBirthMonth = value => {
  return {
    type: 'SELECT_BIRTH_MONTH',
    value,
  };
};

export const selectBirthDay = value => {
  return {
    type: 'SELECT_BIRTH_DAY',
    value,
  };
};

export const answerQuestion = (value, num) => {
  return {
    type: 'ANSWER_QUESTION',
    value,
    num,
  };
};

export const inputContactDetail = value => {
  return {
    type: 'INPUT_CONTACT_DETAIL',
    value,
  };
};
