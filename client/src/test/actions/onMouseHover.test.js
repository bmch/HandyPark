import { HOVER, hover, UNHOVER, unhover } from '../../actions/onMouseHover';

test('hover should return an object', () => {
  const id = '123abc';
  expect(hover(id)).toEqual({
    type: HOVER,
    hoverId: '123abc'
  });
});

test('unhover should return an object', () => {
  expect(unhover()).toEqual({
    type: UNHOVER
  });
});
