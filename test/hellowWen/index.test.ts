import helloWen from '@src/helloWen'
it('say hello', () => {
  console.log = jest.fn();
  helloWen()
  expect(console.log).toBeCalled()
});
export {}
