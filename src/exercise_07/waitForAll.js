export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  function isPromise(obj) {
    return (!!obj && (typeof obj === 'object' || typeof obj === 'function')
      && typeof obj.then === 'function'
    );
  }

  for (let p of promises) {
    if (!isPromise(p)) throw new Error('Not all elements are promises.');
  }

  const rejectArr = [];
  const arr = [];
  let i = 0;
  for (let p of promises) {
    let idx = i;
    rejectArr.push(false);
    arr.push(
      new Promise((resolve) => resolve(p)).catch((err) => {
        rejectArr[idx] = true;
      })
    );
    i++;
  }

  return Promise.all(arr).then((value) => {
    let idx_rej = rejectArr.indexOf(true);
    if (idx_rej >= 0) {
      throw new Error('It should not be a success promise');
    }
  });
}
