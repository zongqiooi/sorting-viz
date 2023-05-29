export default function disableButtons() {
  let generateButton = document.getElementById("generate-button");
  let mergeSortButton = document.getElementById("merge-sort-button");
  let quickSortButton = document.getElementById("quick-sort-button");
  let bubbleSortButton = document.getElementById("bubble-sort-button");
  let selectionSortButton = document.getElementById("selection-sort-button");
  let insertionSortButton = document.getElementById("insertion-sort-button");

  generateButton.disabled = true;
  mergeSortButton.disabled = true;
  quickSortButton.disabled = true;
  bubbleSortButton.disabled = true;
  selectionSortButton.disabled = true;
  insertionSortButton.disabled = true;

  generateButton.style.cursor = "not-allowed";
  mergeSortButton.style.cursor = "not-allowed";
  quickSortButton.style.cursor = "not-allowed";
  bubbleSortButton.style.cursor = "not-allowed";
  selectionSortButton.style.cursor = "not-allowed";
  insertionSortButton.style.cursor = "not-allowed";
}
