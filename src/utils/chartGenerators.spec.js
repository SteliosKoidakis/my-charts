import {
  renderDonutChart,
  renderLinarChart,
} from './chartGenerators';

jest.mock('d3-selection', () => ({
  select: () => jest.fn(),
}));

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
  describe('Given renderLinarChart utility', () => {
    describe('When is called with undefined information parameter or information.element', () => {
      it('Then it should return undefined and code will not break', () => {
        let result = renderLinarChart();
        expect(result).toBeUndefined();
        result = renderLinarChart({
          element: undefined,
        });
        expect(result).toBeUndefined();
      });
    });
  });
});
