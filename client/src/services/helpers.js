const waitFor = (milliseconds) => {
  const newWait = new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
  return newWait;
};

export default waitFor;
