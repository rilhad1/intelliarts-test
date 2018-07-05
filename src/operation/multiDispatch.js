const multiDispatch = (
  dispatch,
  firstAction,
  secondAction,
  thirdAction,
  fourthAction,
) => {
  if (firstAction) dispatch(firstAction);
  if (secondAction) dispatch(secondAction);
  if (thirdAction) dispatch(thirdAction);
  if (fourthAction) dispatch(fourthAction);
};

export default multiDispatch;