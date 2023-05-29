import disableButtons from "../disableButtons";
import enableButtons from "../enableButtons";
import checkArraySorted from "../checkArraySorted";

export default async function bubbleSort(
  ANIMATION_SPEED_MS,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  let bars = document.querySelectorAll(".bar");

  if (checkArraySorted(bars)) {
    return;
  }

  disableButtons();

  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = COMPARED_COLOR;
      bars[j + 1].style.backgroundColor = COMPARED_COLOR;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      var value1 = parseInt(bars[j].style.height, 10);
      var value2 = parseInt(bars[j + 1].style.height, 10);

      if (value1 > value2) {
        swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }

      bars[j].style.backgroundColor = ORIGINAL_COLOR;
      bars[j + 1].style.backgroundColor = ORIGINAL_COLOR;
    }

    bars[bars.length - i - 1].style.backgroundColor = SWAPPED_COLOR;
  }

  enableButtons();
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
