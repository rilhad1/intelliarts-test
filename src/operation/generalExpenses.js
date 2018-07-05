export const calculationTotal = (currencyName, currency, rates) => {
  let allList = currency.slice().map(item => item.slice(1));
  let list = [].concat(...allList);
  let arrayOfSums = list.map(item => item.price / rates[item.currency]);
  let total = arrayOfSums.reduce((sum, current) => sum + current);
  return rates[currencyName] * total;
};