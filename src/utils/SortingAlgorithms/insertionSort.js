import disableButtons from "../disableButtons";
import enableButtons from "../enableButtons";
import checkArraySorted from "../checkArraySorted";

export default async function insertionSort(
  ANIMATION_SPEED_MS,
  BAR_NUMBER,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  let bars = document.querySelectorAll(".bar");

  if (checkArraySorted(bars)) {
    return;
  }

  disableButtons();

  bars[0].style.backgroundColor = ORIGINAL_COLOR;

  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var key = parseInt(bars[i].style.height, 10);
    var height = bars[i].style.height;

    bars[i].style.backgroundColor = COMPARED_COLOR;
    bars[i - 1].style.backgroundColor = COMPARED_COLOR;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    while (j >= 0 && parseInt(bars[j].style.height, 10) > key) {
      bars[j].style.backgroundColor = COMPARED_COLOR;
      bars[j + 1].style.backgroundColor = COMPARED_COLOR;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      swap(bars[j], bars[j + 1]);

      j = j - 1;

      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = SWAPPED_COLOR;
      }
    }

    bars[j + 1].style.height = height;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    bars[i].style.backgroundColor = SWAPPED_COLOR;
    bars[i - 1].style.backgroundColor = SWAPPED_COLOR;
  }

  enableButtons();
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
