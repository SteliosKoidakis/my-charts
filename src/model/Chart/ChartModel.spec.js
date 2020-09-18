import { get } from 'axios';
import ChartModel from './ChartModel';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Given ChartModel class', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = new ChartModel('type');
  });
  describe('When is instantiated', () => {
    it('Then the properties should be initialized with default values', () => {
      expect(wrapper.tablet).toBe(0);
      expect(wrapper.smartphone).toBe(0);
      expect(wrapper.type).toBe('type');
      expect(wrapper.total).toBe(0);
      expect(wrapper.data).toStrictEqual([]);
    });
  });
  describe('Give tabletPercentage getter', () => {
    describe('Wehn is called', () => {
      it('Then it should return the correct percentage', () => {
        wrapper.tablet = 50;
        wrapper.total = 100;
        expect(wrapper.tabletPercentage).toBe(50);
      });
    });
  });
  describe('Give smartphonePercentage getter', () => {
    describe('When is called', () => {
      it('Then it should return the correct percentage', () => {
        wrapper.smartphone = 50;
        wrapper.total = 100;
        expect(wrapper.smartphonePercentage).toBe(50);
      });
    });
  });
  describe('Give getChartData method', () => {
    describe('When is called', () => {
      it('Then it should trigger get method with url according to this.type', () => {
        wrapper.type = 'test';
        wrapper.getChartData();
        expect(get).toHaveBeenCalledWith('https://5f621d2789dbd70016e194ca.mockapi.io/chart/test');
      });
      describe('When http call returns an error', () => {
        it('Then it should trigger _updateData method with [] parameter', async () => {
          get.mockImplementation(() => {
            throw new Error();
          });
          wrapper._updateData = jest.fn();
          await wrapper.getChartData();
          expect(wrapper._updateData).toHaveBeenCalledWith([]);
        });
      });
      describe('When http call returns a success', () => {
        it('Then it should trigger _updateData method with data parameter from the response', async () => {
          const data = [1, 2, 3];
          get.mockImplementation(() => ({ data }));
          wrapper._updateData = jest.fn();
          await wrapper.getChartData();
          expect(wrapper._updateData).toHaveBeenCalledWith(data);
        });
      });
    });
  });
  describe('Give _updateData method', () => {
    describe('When is called with items parameter', () => {
      it('Then it should update the class properties correctly', () => {
        const data = {
          tablet: 4,
          smartphone: 5,
          data: [1, 2, 3, 4],
        };
        wrapper._updateData(data);
        expect(wrapper.tablet).toBe(data.tablet);
        expect(wrapper.smartphone).toBe(data.smartphone);
        expect(wrapper.total).toBe(data.tablet + data.smartphone);
        expect(wrapper.data).toBe(data.data);
      });
    });
    describe('When is called with falsy items parameter', () => {
      it('Then it should return undefined and code will not break', () => {
        let result = wrapper._updateData({});
        expect(result).toBe(undefined);
        result = wrapper._updateData(null);
        expect(result).toBe(undefined);
      });
    });
  });
});
