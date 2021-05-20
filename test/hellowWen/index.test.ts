import { helloWen } from '@src'
it('say hello', () => {
  console.log = jest.fn();
  helloWen()
  expect(console.log).toBeCalled()
});
export {}
