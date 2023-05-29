import toast from "react-hot-toast";

export default function checkArraySorted(bars) {
  let array = [];

  for (let i = 0; i < bars.length; i += 1) {
    array.push(parseInt(bars[i].style.height, 10));
  }

  let sorted = array.slice();
  sorted.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < bars.length; i += 1) {
    if (array[i] !== sorted[i]) {
      return false;
    }
  }

  toast.success("Bars are sorted. Press New! 🚀");
  return true;
}
