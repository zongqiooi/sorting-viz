export default async function selectionSort(ANIMATION_SPEED_MS, BAR_COLOR) {
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;

  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;

    // Provide darkblue color to the ith bar
    // bars[i].style.backgroundColor = "darkblue";
    bars[min_idx].style.backgroundColor = "red";
    for (var j = i + 1; j < bars.length; j += 1) {
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";

      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      // To store the integer value of jth bar to var1
      //   var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      // To store the integer value of (min_idx)th bar to var2
      //   var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
      var value1 = parseInt(bars[j].style.height, 10);
      var value2 = parseInt(bars[min_idx].style.height, 10);

      // Compare val1 & val2
      if (value1 < value2) {
        // Changing the color to the previous one
        bars[min_idx].style.backgroundColor = BAR_COLOR;
        min_idx = j;
      } else {
        // Changing the color to the previous one
        bars[j].style.backgroundColor = BAR_COLOR;
      }
    }

    // To swap ith and (min_idx)th bar
    await swap(bars[min_idx], bars[i]);
    // var temp1 = bars[min_idx].style.height;
    // bars[min_idx].style.height = bars[i].style.height;
    // bars[i].style.height = temp1;

    // To pause the execution of code for 300 milliseconds
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve();
    //   }, ANIMATION_SPEED_MS)
    // );

    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = BAR_COLOR;

    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = "#13CE66";
  }
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}
