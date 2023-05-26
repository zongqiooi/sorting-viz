export default async function bubbleSort(ANIMATION_SPEED_MS) {
  var generateButton = document.getElementById("generate-button");
  var bubbleSortButton = document.getElementById("bubble-sort-button");
  var bars = document.querySelectorAll(".bar");

  generateButton.disabled = true;
  bubbleSortButton.disabled = true;

  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      // To change background-color of the bars to be compared
      bars[j].style.backgroundColor = "#FF4949";
      bars[j + 1].style.backgroundColor = "#FF4949";

      // To set delay for animation
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ANIMATION_SPEED_MS)
      );

      var value1 = parseInt(bars[j].style.height, 10);
      var value2 = parseInt(bars[j + 1].style.height, 10);

      // To compare value of two bars
      if (value1 > value2) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }

      // Changing the color to the previous one
      bars[j].style.backgroundColor = "pink";
      bars[j + 1].style.backgroundColor = "pink";
    }

    // Changing the color of greatest element found in the above traversal
    bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
  }

  generateButton.disabled = false;
  bubbleSortButton.disabled = false;
  // document.getElementById("generate-button").style.display = "inline-block";
}

function swap(el1, el2) {
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// export default function ownBubbleSort(array) {
//   const animations = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       //   const bars = document.getElementsByClassName("bar");
//       //   bars[i].style.backgroundColor = "red";
//       //   bars[i + 1].style.backgroundColor = "red";
//       animations.push([i, j]);
//       animations.push([i, j]);

//       if (array[i] >= array[j]) {
//         animations.push([j, array[i]]);
//         animations.push([i, array[j]]);
//         // animations.push([j, array[i]]);
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       } else {
//         animations.push([j, array[j]]);
//         animations.push([i, array[i]]);
//       }
//     }
//   }
//   return animations;
// }
