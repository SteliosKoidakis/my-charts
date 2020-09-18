import DonutChartComponent from './DonutChartComponent';
import {
  renderStyles,
  renderDonutChart,
  renderLinarChart,
} from '~/utils';

jest.mock('~/utils', () => ({
  formatNumber: jest.fn(),
  renderStyles: jest.fn(),
  renderDonutChart: jest.fn(),
  renderLinarChart: jest.fn(),
}));

describe('Given component DonutChartComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = new DonutChartComponent();
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('Given tabletPercentage getter', () => {
    describe('When tabletPercentage attribute is a falsy or unexpected value', () => {
      it('Then it should return 0', () => {
        wrapper.setAttribute('tabletPercentage', false);
        expect(wrapper.tabletPercentage).toBe(0);
        wrapper.setAttribute('tabletPercentage', {});
        expect(wrapper.tabletPercentage).toBe(0);
      });
    });
    describe('When tabletPercentage attribute is a number in a string format', () => {
      it('Then it should return the number', () => {
        wrapper.setAttribute('tabletPercentage', '2');
        expect(wrapper.tabletPercentage).toBe(2);
      });
    });
  });
  describe('Given smartphonePercentage getter', () => {
    describe('When smartphonePercentage attribute is a falsy or unexpected value', () => {
      it('Then it should return 0', () => {
        wrapper.setAttribute('smartphonePercentage', false);
        expect(wrapper.smartphonePercentage).toBe(0);
        wrapper.setAttribute('smartphonePercentage', {});
        expect(wrapper.smartphonePercentage).toBe(0);
      });
    });
    describe('When smartphonePercentage attribute is a number in a string format', () => {
      it('Then it should return the number', () => {
        wrapper.setAttribute('smartphonePercentage', '2');
        expect(wrapper.smartphonePercentage).toBe(2);
      });
    });
  });
  describe('Given tablet getter', () => {
    describe('When tablet attribute is a falsy or unexpected value', () => {
      it('Then it should return 0', () => {
        wrapper.setAttribute('tablet', false);
        expect(wrapper.tablet).toBe(0);
        wrapper.setAttribute('tablet', {});
        expect(wrapper.tablet).toBe(0);
      });
    });
    describe('When tablet attribute is a number in a string format', () => {
      it('Then it should return the number', () => {
        wrapper.setAttribute('tablet', '2');
        expect(wrapper.tablet).toBe(2);
      });
    });
  });
  describe('Given smartphone getter', () => {
    describe('When smartphone attribute is a falsy or unexpected value', () => {
      it('Then it should return 0', () => {
        wrapper.setAttribute('smartphone', false);
        expect(wrapper.smartphone).toBe(0);
        wrapper.setAttribute('smartphone', {});
        expect(wrapper.smartphone).toBe(0);
      });
    });
    describe('When smartphone attribute is a number in a string format', () => {
      it('Then it should return the number', () => {
        wrapper.setAttribute('smartphone', '2');
        expect(wrapper.smartphone).toBe(2);
      });
    });
  });
  describe('Given tabletColor getter', () => {
    describe('When tabletColor attribute has any value', () => {
      it('Then it should return it in string format', () => {
        wrapper.setAttribute('tabletColor', false);
        expect(typeof wrapper.tabletColor).toBe('string');
        wrapper.setAttribute('tabletColor', {});
        expect(typeof wrapper.tabletColor).toBe('string');
      });
    });
  });
  describe('Given currency getter', () => {
    describe('When currency attribute has any value', () => {
      it('Then it should return ""', () => {
        wrapper.setAttribute('currency', false);
        expect(typeof wrapper.currency).toBe('string');
        wrapper.setAttribute('currency', {});
        expect(typeof wrapper.currency).toBe('string');
      });
    });
  });
  describe('Given smartphoneColor getter', () => {
    describe('When smartphoneColor attribute has any value', () => {
      it('Then it should return it in a string format', () => {
        wrapper.setAttribute('smartphoneColor', false);
        expect(typeof wrapper.smartphoneColor).toBe('string');
        wrapper.setAttribute('smartphoneColor', {});
        expect(typeof wrapper.smartphoneColor).toBe('string');
      });
    });
  });
  describe('Given title getter', () => {
    describe('When title attribute has any value', () => {
      it('Then it should return it in a string format', () => {
        wrapper.setAttribute('title', false);
        expect(typeof wrapper.title).toBe('string');
        wrapper.setAttribute('title', {});
        expect(typeof wrapper.title).toBe('string');
      });
    });
  });
  describe('Given data getter', () => {
    describe('When data attribute has any value', () => {
      it('Then it should return an array with values split by comma', () => {
        wrapper.setAttribute('data', false);
        expect(wrapper.data).toStrictEqual(['false']);
      });
    });
  });
  describe('Given total getter', () => {
    describe('When total attribute is a falsy or unexpected value', () => {
      it('Then it should return 0', () => {
        wrapper.setAttribute('total', false);
        expect(wrapper.total).toBe(0);
        wrapper.setAttribute('total', {});
        expect(wrapper.total).toBe(0);
      });
    });
    describe('When total attribute is a number in a string format', () => {
      it('Then it should return the number', () => {
        wrapper.setAttribute('total', '2');
        expect(wrapper.total).toBe(2);
      });
    });
  });
  describe('Given connectedCallback method', () => {
    describe('When is called', () => {
      it('Then it should trigger renderTemplate and renderStyles method', async () => {
        wrapper.renderTemplate = jest.fn();
        wrapper.renderStyles = jest.fn();
        await wrapper.connectedCallback();
        expect(wrapper.renderTemplate).toHaveBeenCalled();
        expect(renderStyles).toHaveBeenCalled();
      });
      it('And it should trigger renderDonutChart with the correct parameter', async () => {
        wrapper.setAttribute('smartphone', 2);
        wrapper.setAttribute('smartphoneColor', 'smartphoneColor');
        wrapper.setAttribute('tablet', 2);
        wrapper.setAttribute('tabletColor', 'tabletColor');
        await wrapper.connectedCallback();
        expect(renderDonutChart).toHaveBeenCalledWith({
          smartphone: {
            value: 2,
            smartphoneColor: 'smartphoneColor',
          },
          tablet: {
            value: 2,
            tabletColor: 'tabletColor',
          },
          element: {
            shadow: wrapper.shadow,
            class: 'donutChart',
          },
        });
      });
      it('And it should trigger renderLinarChart with the correct parameter', async () => {
        const data = '1,2,3';
        wrapper.setAttribute('data', data);
        wrapper.setAttribute('title', 'Title');
        wrapper.setAttribute('smartphoneColor', 'smartphoneColor');
        await wrapper.connectedCallback();
        expect(renderLinarChart).toHaveBeenCalledWith({
          data: data.split(','),
          color: 'smartphoneColor',
          element: {
            shadow: wrapper.shadow,
            class: 'lineChart',
            backgroundClass: 'DonutChartComponent__background-title',
          },
        });
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
