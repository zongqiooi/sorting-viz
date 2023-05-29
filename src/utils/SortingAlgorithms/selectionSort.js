import disableButtons from "../disableButtons";
import enableButtons from "../enableButtons";
import checkArraySorted from "../checkArraySorted";

export default async function selectionSort(
  ANIMATION_SPEED_MS,
  BAR_NUMBER,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;

  if (checkArraySorted(bars)) {
    return;
  }

  disableButtons();

  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[min_idx].style.backgroundColor = COMPARED_COLOR;

    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = COMPARED_COLOR;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      var value1 = parseInt(bars[j].style.height, 10);
      var value2 = parseInt(bars[min_idx].style.height, 10);

      if (value1 < value2) {
        bars[min_idx].style.backgroundColor = ORIGINAL_COLOR;
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = ORIGINAL_COLOR;
      }
    }

    swap(bars[min_idx], bars[i]);

    bars[min_idx].style.backgroundColor = ORIGINAL_COLOR;
    bars[i].style.backgroundColor = SWAPPED_COLOR;
  }

  enableButtons();
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
