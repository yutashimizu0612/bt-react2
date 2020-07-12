export const SELECT_GENDER = 'SELECT_GENDER';
export const SELECT_BIRTH_YEAR = 'SELECT_BIRTH_YEAR';
export const SELECT_BIRTH_MONTH = 'SELECT_BIRTH_MONTH';
export const SELECT_BIRTH_DAY = 'SELECT_BIRTH_DAY';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INPUT_CONTACT_DETAIL = 'INPUT_CONTACT_DETAIL';

export const selectGender = () => {
  return {
    type: 'SELECT_GENDER',
  };
};

export const selectBirthYear = () => {
  return {
    type: 'SELECT_BIRTH_YEAR',
  };
};

export const selectBirthMonth = () => {
  return {
    type: 'SELECT_BIRTH_MONTH',
  };
};

export const selectBirthDay = () => {
  return {
    type: 'SELECT_BIRTH_DAY',
  };
};

export const answerQuestion = () => {
  return {
    type: 'ANSWER_QUESTION',
  };
};

export const inputContactDetail = () => {
  return {
    type: 'INPUT_CONTACT_DETAIL',
  };
};
