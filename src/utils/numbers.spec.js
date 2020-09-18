import { formatNumber } from './numbers';

describe('Given numbers utilitiss', () => {
  describe('Give, formatNumber utility', () => {
    describe('When is called without a number type parameter', () => {
      it('Then it should return the paramter passed', () => {
        let result = formatNumber([]);
        expect(result).toStrictEqual([]);
        result = formatNumber('122222');
        expect(result).toStrictEqual('122222');
      });
    });
    describe('When is called with a number parameter', () => {
      it('Then it should format the number with dots correctly', () => {
        let result = formatNumber(10000);
        expect(result).toStrictEqual('10.000');
        result = formatNumber(122222);
        expect(result).toStrictEqual('122.222');
      });
    });
  });
});
