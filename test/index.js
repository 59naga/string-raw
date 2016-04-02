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

    error = throws(() => {stringRaw('');});
    assert(error instanceof TypeError);
    assert(error.message === 'Cannot convert undefined or null to object');

    error = throws(() => {stringRaw(null);});
    assert(error instanceof TypeError);
    assert(error.message === 'Cannot convert undefined or null to object');

    error = throws(() => {stringRaw({ raw: null });});
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

    const args0 = [{ raw: [] }, arg1, arg2];
    assert(stringRaw(...args0) === String.raw(...args0));

    const args1 = [{ raw: ['hoge'] }, arg1, arg2];
    assert(stringRaw(...args1) === String.raw(...args1));

    const args2 = [{ raw: ['hoge', 'fuga'] }, arg1, arg2];
    assert(stringRaw(...args2) === String.raw(...args2));

    const args3 = [{ raw: ['hoge', 'fuga', 'piyo'] }, arg1, arg2];
    assert(stringRaw(...args3) === String.raw(...args3));

    const args4 = [{ raw: {} }, arg1, arg2];
    assert(stringRaw(...args4) === String.raw(...args4));

    const args5 = [{ raw: true }, arg1, arg2];
    assert(stringRaw(...args5) === String.raw(...args5));
  });
});
