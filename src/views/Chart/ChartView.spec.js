import ChartView from './ChartView';
import { ChartModel } from '~/models';
import { renderStyles } from '~/utils';

jest.mock('~/utils', () => ({
  renderStyles: jest.fn(),
}));

describe('Given component ChartView', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = new ChartView();
  });
  describe('When class is constructed', () => {
    it('Then revenewChart should be an instance of ChartModel("revenewChart")', () => {
      expect(wrapper.revenewChart).toMatchObject(new ChartModel('revenewChart'));
    });
    it('And impressionsChart should be an instance of ChartModel("impressionsChart")', () => {
      expect(wrapper.impressionsChart).toMatchObject(new ChartModel('impressionsChart'));
    });
    it('And visitsChart should be an instance of ChartModel("visitsChart")', () => {
      expect(wrapper.visitsChart).toMatchObject(new ChartModel('visitsChart'));
    });
  });
  describe('Given method connectedCallback', () => {
    describe('When is called', () => {
      it('Then it should trigger getChartsInformation, renderTemplate and renderStyles method', async () => {
        wrapper.getChartsInformation = jest.fn();
        wrapper.renderTemplate = jest.fn();
        await wrapper.connectedCallback();
        expect(wrapper.getChartsInformation).toHaveBeenCalled();
        expect(wrapper.renderTemplate).toHaveBeenCalled();
        expect(renderStyles).toHaveBeenCalled();
      });
    });
  });
  describe('Given method getChartsInformation', () => {
    describe('When is called', () => {
      it('Then it should trigger revenewChart, impressionsChart and visitsChart getChartData method', async () => {
        wrapper.revenewChart.getChartData = jest.fn();
        wrapper.impressionsChart.getChartData = jest.fn();
        wrapper.visitsChart.getChartData = jest.fn();
        await wrapper.getChartsInformation();
        expect(wrapper.revenewChart.getChartData).toHaveBeenCalled();
        expect(wrapper.impressionsChart.getChartData).toHaveBeenCalled();
        expect(wrapper.visitsChart.getChartData).toHaveBeenCalled();
      });
    });
  });
  describe('Given method renderTemplate', () => {
    describe('When is called', () => {
      it('Then it should render the correct template', () => {
        wrapper.renderTemplate();
        expect(wrapper.shadow.innerHTML).toMatchSnapshot();
      });
    });
  });
});
