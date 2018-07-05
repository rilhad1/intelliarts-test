import React from 'react';

export const AlertMessage = ({
  message,
  isLengthCorrect,
  isDateCorrect,
  isPriceCorrect,
  isCurrencyCorrect
}) => {
  if (message) {
    return <p>{message}</p>;
  }
  return (
    <React.Fragment>
      {!isLengthCorrect && <p>Check Arguments</p>}
      {!isDateCorrect && <p>Incorrect Date</p>}
      {!isPriceCorrect && <p>Incorrect Price</p>}
      {!isCurrencyCorrect && <p>Incorrect Currency</p>}
    </React.Fragment>
  );
};
