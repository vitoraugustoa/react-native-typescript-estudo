export function add(x: number, y: number) {
  return x + y;
}

describe('Calculator', () => {
  it('add numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
