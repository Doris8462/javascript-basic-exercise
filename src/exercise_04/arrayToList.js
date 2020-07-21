export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) throw ('Creating list from undefined array');
  else if (!array.length) throw ('Creating list from empty array');
  else {
    const list = { value: array[0], next: null };
    let nextNode = list;
    for (let i = 1; i < array.length; i++) {
      nextNode.next = { value: array[i], next: null };
      nextNode = nextNode.next;
    }
    return list;
  }
}
