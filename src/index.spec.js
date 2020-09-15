describe('Given main index file', () => {
  beforeEach(async () => {
    document.getElementById = jest.fn(() => ({
      appendChild: jest.fn(),
    }));
    await import('./index.js');
  });
  it('test', () => {
    expect(1 + 1).toEqual(2);
  });
  it('Then it should instantiate ChartView', () => {
    expect(1 + 1).toEqual(2);
  });
  it('And it should trigger getElementById with "main" paramter', () => {
    console.log('tes1');

    expect(document.getElementById).toHaveBeenCalledWith('main');
  });
});
