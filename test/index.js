// dependencies
import assert from 'power-assert';
import { throws } from 'assert-exception';

// target
import stringRaw from '../src';

// specs
describe('stringRaw', () => {
  it('should returns an error to follow the NodeJS if the argument is invalid', () => {
    let error;

    error = throws(() => {stringRaw();});
    assert(error instanceof TypeError);
    assert(error.message === 'Cannot convert undefined or null to object');

    error = throws(() => {stringRaw(null);});
    assert(error instanceof TypeError);
    assert(error.message === 'Cannot convert undefined or null to object');
  });

  it('should follow the results of String.raw of NodeJS', () => {
    const arg1 = 'foo';
    const arg2 = 'bar';
    assert(stringRaw`` === String.raw``);
    assert(stringRaw`hoge` === String.raw`hoge`);
    assert(stringRaw`hoge${arg1}` === String.raw`hoge${arg1}`);
    assert(stringRaw`hoge${arg1}fuga${arg2}` === String.raw`hoge${arg1}fuga${arg2}`);
    assert(stringRaw`hoge${arg1}fuga${arg2}piyo` === String.raw`hoge${arg1}fuga${arg2}piyo`);
    assert(
      stringRaw`hoge
        ${arg1}
        fuga
        ${arg2}
        piyo
      `
      ===
      String.raw`hoge
        ${arg1}
        fuga
        ${arg2}
        piyo
      `
    );

    const literal0 = { raw: [] };
    assert(stringRaw(literal0, arg1, arg2) === String.raw(literal0, arg1, arg2));

    const literal1 = { raw: ['hoge'] };
    assert(stringRaw(literal1, arg1, arg2) === String.raw(literal1, arg1, arg2));

    const literal2 = { raw: ['hoge', 'fuga'] };
    assert(stringRaw(literal2, arg1, arg2) === String.raw(literal2, arg1, arg2));

    const literal3 = { raw: ['hoge', 'fuga', 'piyo'] };
    assert(stringRaw(literal3, arg1, arg2) === String.raw(literal3, arg1, arg2));
  });
});
