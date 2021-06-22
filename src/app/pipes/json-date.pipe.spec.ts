import { JsonDatePipe } from './json-date.pipe';

describe('JsonDatePipe', () => {
  it('create an instance', () => {
    const pipe = new JsonDatePipe();
    expect(pipe).toBeTruthy();
  });
});
