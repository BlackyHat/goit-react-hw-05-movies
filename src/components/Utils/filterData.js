let tmpArray = [];

function itemCheck(item) {
  const itemIdx = tmpArray.indexOf(item.label);
  if (itemIdx === -1) {
    tmpArray.push(item.label);
    return true;
  }
  return false;
}

export function updateArray(data) {
  const newData = data.filter(item => itemCheck(item));
  newData.forEach(({ label }, idx) => {
    const filter = data.filter(el => el.label === label);
    if (filter.length > 1) {
      const sum = filter.reduce((acc, arrEl) => (acc += arrEl.percentage), 0);
      newData[idx].percentage = sum;
      return;
    }
    return;
  });
  return newData;
}
