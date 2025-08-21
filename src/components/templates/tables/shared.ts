const colorizeCellByValue = (value: number | string | null): string => {
  if (typeof value !== 'number' || value <= 0) return '';
  return 'bg-price-high';

  // if (value > 1000) return 'bg-price-low';
  // if (value < 2000) return 'bg-price-medium';
  // if (value < 3000) return 'bg-price-high';
  // return 'bg-price-rich';
};

export default colorizeCellByValue;
