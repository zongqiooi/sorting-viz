import disableButtons from "../disableButtons";
import enableButtons from "../enableButtons";
import checkArraySorted from "../checkArraySorted";

export default async function quickSort(
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

  await quickSortHelper(
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

async function quickSortHelper(
  bars,
  low,
  high,
  ANIMATION_SPEED_MS,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  if (low < high) {
    const pivotIndex = await partition(
      bars,
      low,
      high,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );

    await quickSortHelper(
      bars,
      low,
      pivotIndex - 1,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );

    await quickSortHelper(
      bars,
      pivotIndex + 1,
      high,
      ANIMATION_SPEED_MS,
      ORIGINAL_COLOR,
      COMPARED_COLOR,
      SWAPPED_COLOR
    );
  }
}

async function partition(
  bars,
  low,
  high,
  ANIMATION_SPEED_MS,
  ORIGINAL_COLOR,
  COMPARED_COLOR,
  SWAPPED_COLOR
) {
  const pivot = parseInt(bars[high].style.height, 10);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = COMPARED_COLOR;
    bars[high].style.backgroundColor = COMPARED_COLOR;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    const value = parseInt(bars[j].style.height, 10);

    if (value < pivot) {
      i++;
      swap(bars, i, j, ANIMATION_SPEED_MS);
    }

    bars[j].style.backgroundColor = ORIGINAL_COLOR;
    bars[high].style.backgroundColor = ORIGINAL_COLOR;
  }

  swap(bars, i + 1, high, ANIMATION_SPEED_MS);
  return i + 1;
}

function swap(bars, i, j) {
  const tempHeight = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = tempHeight;
}
