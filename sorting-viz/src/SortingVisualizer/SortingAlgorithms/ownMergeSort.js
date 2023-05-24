export default function ownMergeSort(array) {
  const middle_index = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left_sub_array = array.splice(0, middle_index);
  return mergeArrays(ownMergeSort(left_sub_array), ownMergeSort(array));
}

function mergeArrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}
