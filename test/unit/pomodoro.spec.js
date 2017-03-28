import {Pomodoro} from '../../src/pomodoro/pomodoro';

describe('The Pomodoro module', () => {
  it('Contains a title field', () => {
    var sut = new Pomodoro();
    expect(sut.title).toEqual('Pomodoro');
  });
});
