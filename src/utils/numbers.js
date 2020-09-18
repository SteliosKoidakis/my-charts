const formatNumber = (number) => {
  if (typeof number !== 'number') return number;

  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export { formatNumber };
