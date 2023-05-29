import disableButtons from "../disableButtons";
import enableButtons from "../enableButtons";
import checkArraySorted from "../checkArraySorted";

export default async function mergeSort(
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

  await mergeSortHelper(
    bars,
    0,
    bars.length - 1,
    ANIMATION_SPEED_MS,
    ORIGINAL_COLOR,
    COMPARED_COLOR,
    SWAPPED_COLOR
  );

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = SWAPPED_COLOR;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );
  }

  enableButtons();
}

async function mergeSortHelper(
  bars,
  left,
  right,
  ANIMATION_SPEED_MS,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    await mergeSortHelper(
      bars,
      left,
      mid,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );

    await mergeSortHelper(
      bars,
      mid + 1,
      right,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );

    await merge(
      bars,
      left,
      mid,
      right,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );
  }
}

async function merge(
  bars,
  left,
  mid,
  right,
  ANIMATION_SPEED_MS,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const leftbars = new Array(n1);
  const rightbars = new Array(n2);

  for (let i = 0; i < n1; i++) {
    leftbars[i] = bars[left + i].style.height;
  }

  for (let j = 0; j < n2; j++) {
    rightbars[j] = bars[mid + 1 + j].style.height;
  }

  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    const value1 = parseInt(leftbars[i], 10);
    const value2 = parseInt(rightbars[j], 10);

    bars[k].style.backgroundColor = COMPARED_COLOR;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    if (value1 <= value2) {
      bars[k].style.height = leftbars[i];
      i++;
    } else {
      bars[k].style.height = rightbars[j];
      j++;
    }

    bars[k].style.backgroundColor = ORIGINAL_COLOR;
    k++;
  }

  while (i < n1) {
    bars[k].style.height = leftbars[i];
    i++;
    k++;
  }

  while (j < n2) {
    bars[k].style.height = rightbars[j];
    j++;
    k++;
  }
}
