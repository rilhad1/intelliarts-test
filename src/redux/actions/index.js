let listId = 0; 

export const addList = data => ({
  type: 'ADD_LIST',
  id: listId++,  
  date: data[1],
  product: data[4],
  price: data[2],
  currency: data[3],
});

export const viewList = bool => ({
  type: 'IS_VISIBLE',
  isVisible: bool,
});

export const clearList = date => ({
  type: 'RM_LIST_ITEM',
  date,
});

export const viewTotal = bool => ({
  type: 'VIEW_TOTAL',
  viewTotal: bool,
});

export const baseCurrency = baseCurrency => ({
  type: 'BASE_CURRENCY',
  baseCurrency: baseCurrency.toUpperCase(),
});
