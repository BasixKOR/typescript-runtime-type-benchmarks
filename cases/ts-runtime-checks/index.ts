import { assertStrict, assertLoose, parseStrict } from './build';
import { addCase } from '../../benchmarks';

addCase('ts-runtime-checks', 'parseStrict', data => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return parseStrict(data as any);
});

addCase('ts-runtime-checks', 'assertStrict', data => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return assertStrict(data as any);
});

addCase('ts-runtime-checks', 'assertLoose', data => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return assertLoose(data as any);
});
