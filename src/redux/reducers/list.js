const list = (state = [], action) => { 
  switch (action.type) {
    case 'ADD_LIST':
      if (state.filter(item => item[0] === action.date).length > 0) {
        return state.map((item) => {
          if (item[0] === action.date) {
            item.push({
              id: action.id,
              product: action.product,
              price: action.price,
              currency: action.currency,
            });
          }
          return item;
        });
      }
      return [
        ...state,
        [
          action.date,
          {
            id: action.id,
            product: action.product,
            price: action.price,
            currency: action.currency,
          },
        ],
      ];

    case 'RM_LIST_ITEM':
      return  state.filter(item =>
        item[0] !== action.date
      );

    default:
      return state;
  }
};

export default list;
