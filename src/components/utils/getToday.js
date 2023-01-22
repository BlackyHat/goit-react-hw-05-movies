export const getToday = () => {
  const date = new Date();
  return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
};
