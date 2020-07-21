export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let count = 0;
  if (string === null || string === undefined || string.length === 0);
  else if (prediction) count = string.match(/l/ig).length;
  else count = string.match(/[a-z]/ig).length;
  return count;
}
