export const debounce = (fn: Function, timeout = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(), timeout);
  };
};