const colorizeCellByValue = (value: number | string | null): string => {
  if (typeof value !== 'number') return '';
  if (value < 1000) return 'bg-error';
  if (value < 2000) return 'bg-warning';
  if (value < 3000) return 'bg-success';
  return 'bg-secondary';
};

export default colorizeCellByValue;
