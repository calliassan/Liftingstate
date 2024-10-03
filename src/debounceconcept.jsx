function debounce(fn, delay) {
  let timer;
  console.log(timer);
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
    console.log(timer);
  };
}

const debounceddunction = debounce(() => {
  console.log("Hello world");
}, 500);

debounceddunction();
debounceddunction();
debounceddunction();
