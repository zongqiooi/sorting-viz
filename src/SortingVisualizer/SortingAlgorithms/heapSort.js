export default async function heapSort(ANIMATION_SPEED_MS, BAR_COLOR, n) {
  var bars = document.querySelectorAll(".bar");

  // Build heap (rearrange array)
  for (var i = n / 2 - 1; i >= 0; i--) {
    await Heapify(n, i, ANIMATION_SPEED_MS, BAR_COLOR);
  }

  // One by one extract an element from heap
  for (var j = n - 1; j > 0; j--) {
    // Move current root to end

    await swap(bars[j], bars[0]);

    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, ANIMATION_SPEED_MS)
    // );

    // Call max Heapify on the reduced heap
    bars[j].style.backgroundColor = "#13CE66";
    await Heapify(j, 0, ANIMATION_SPEED_MS, BAR_COLOR);
  }
  bars[j].style.backgroundColor = "#13CE66";
}

async function Heapify(n, i, ANIMATION_SPEED_MS, BAR_COLOR) {
  var bars = document.querySelectorAll(".bar");
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2 * i + 1
  var r = 2 * i + 2; // right = 2 * i + 2

  // If left child is larger than root
  // bars[l].style.backgroundColor = "red";
  // bars[largest].style.backgroundColor = "red";

  if (
    l < n &&
    parseInt(bars[l].style.height, 10) >
      parseInt(bars[largest].style.height, 10)
  ) {
    largest = l;
  }

  // bars[l].style.backgroundColor = BAR_COLOR;
  // bars[largest].style.backgroundColor = BAR_COLOR;

  // bars[r].style.backgroundColor = "red";
  // bars[largest].style.backgroundColor = "red";

  // If right child is larger than largest so far
  if (
    r < n &&
    parseInt(bars[r].style.height, 10) >
      parseInt(bars[largest].style.height, 10)
  ) {
    largest = r;
  }

  // bars[r].style.backgroundColor = BAR_COLOR;
  // bars[largest].style.backgroundColor = BAR_COLOR;

  // If largest is not root
  if (largest !== i) {
    bars[i].style.backgroundColor = "red";
    bars[largest].style.backgroundColor = "red";

    await swap(bars[i], bars[largest]);

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    bars[i].style.backgroundColor = BAR_COLOR;
    bars[largest].style.backgroundColor = BAR_COLOR;

    // Recursively Hapify the affected sub-tree
    await Heapify(n, largest, ANIMATION_SPEED_MS, BAR_COLOR);
  }
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
