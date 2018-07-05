const initialState = {
  isListVisible: false,
  viewTotal: false,
  baseCurrency: null,
};

const bool = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_VISIBLE':
      return {
        ...state,
        isListVisible: action.isVisible,
      };

    case 'VIEW_TOTAL':
      return {
        ...state,
        viewTotal: action.viewTotal,
      };

    case 'BASE_CURRENCY':
      return {
        ...state,
        baseCurrency: action.baseCurrency,
      };

    default:
      return state;
  };
};


export default bool;
