import {
  renderDonutChart,
  renderLineChart,
} from './chartGenerators';

describe('Given chartGenerators utils', () => {
  describe('Given renderDonutChart utility', () => {
    describe('When is called with undefined information parameter or information.element', () => {
      it('Then it should return undefined', () => {
        let result = renderDonutChart();
        expect(result).toBeUndefined();
        result = renderDonutChart({
          element: undefined,
        });
        expect(result).toBeUndefined();
      });
    });
  });
  describe('Given renderLineChart utility', () => {
    describe('When is called with undefined information parameter or information.element', () => {
      it('Then it should return undefined and code will not break', () => {
        let result = renderLineChart();
        expect(result).toBeUndefined();
        result = renderLineChart({
          element: undefined,
        });
        expect(result).toBeUndefined();
      });
    });
  });
});
