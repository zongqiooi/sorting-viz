export default async function insertionSort(
  ANIMATION_SPEED_MS,
  BAR_COLOR,
  BAR_NUMBER
) {
  let bars = document.querySelectorAll(".bar");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = "#13CE66";
  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].style.height, 10);
    // var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    //Provide red color to the ith bar
    bars[i].style.backgroundColor = "red";
    bars[i - 1].style.backgroundColor = "red";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].style.height, 10) > key) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      // For placing jth element over (j+1)th element
      await swap(bars[j], bars[j + 1]);

      // Assign j-1 to j
      j = j - 1;

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = "#13CE66";
      }
    }

    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, ANIMATION_SPEED_MS)
    );

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = "#13CE66";
    bars[i - 1].style.backgroundColor = "#13CE66";
  }
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
