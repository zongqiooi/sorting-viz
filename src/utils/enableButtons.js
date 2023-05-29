export default function enableButtons() {
  let generateButton = document.getElementById("generate-button");
  let mergeSortButton = document.getElementById("merge-sort-button");
  let quickSortButton = document.getElementById("quick-sort-button");
  let bubbleSortButton = document.getElementById("bubble-sort-button");
  let selectionSortButton = document.getElementById("selection-sort-button");
  let insertionSortButton = document.getElementById("insertion-sort-button");

  generateButton.disabled = false;
  mergeSortButton.disabled = false;
  quickSortButton.disabled = false;
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;

  generateButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
  mergeSortButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
  quickSortButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
  bubbleSortButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
  selectionSortButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
  insertionSortButton.style.cursor = `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`;
}
