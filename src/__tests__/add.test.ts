import  add  from "../add";

describe('add', () => {
  test('should return 3', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
