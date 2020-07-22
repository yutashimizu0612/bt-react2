export const MOVE_TO_NEXT = 'MOVE_TO_NEXT';

export const moveToNext = current => {
  return {
    type: 'MOVE_TO_NEXT',
    current,
  };
};
