export const HOVER = 'HOVER';
export const UNHOVER = 'UNHOVER';

export const hover = hoverId => ({
  type: HOVER,
  hoverId
});

export const unhover = () => ({
  type: UNHOVER
});
