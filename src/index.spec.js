describe('Given main index file', () => {
  beforeEach(async () => {
    document.getElementById = jest.fn(() => ({
      appendChild: jest.fn(),
    }));
    await import('./index.js');
  });
  it('Then it should instantiate ChartView', () => {
    // TBD
  });
  // check if can be done
  it('And it should trigger getElementById with "main" paramter', () => {
    expect(document.getElementById).toHaveBeenCalledWith('main');
  });
});
