import React, { useState, useEffect } from "react";
import "../css/SortingVisualizer.css";
import bubbleSort from "../SortingAlgorithms/bubbleSort";
import selectionSort from "../SortingAlgorithms/selectionSort";
import insertionSort from "../SortingAlgorithms/insertionSort";
import heapSort from "../SortingAlgorithms/heapSort";
import mergeSort from "../SortingAlgorithms/mergeSort";
import quickSort from "../SortingAlgorithms/quickSort";

const ANIMATION_SPEED_MS = 100;
const BAR_COLOR = "pink";
const BAR_NUMBER = 10;
// const BAR_NUMBER = 330;
const ORIGINAL_COLOR = "turquoise";
const COMPARED_COLOR = "red";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  // const [color, setColor] = useState(BAR_COLOR);

  const generateNewRandomNumbers = () => {
    const numbers = [];

    for (let i = 0; i < BAR_NUMBER; i++) {
      numbers.push(randomIntFromInterval(5, 550));
    }

    // setColor(BAR_COLOR);
    setArray(numbers);

    try {
      const bars = document.querySelectorAll(".bar");
      bars.forEach((bar) => {
        bar.style.backgroundColor = BAR_COLOR;
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateNewRandomNumbers();
  }, []);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const checkArraysAreEqual = (arrayOne, arrayTwo) => {
  //   if (arrayOne.length !== arrayTwo.length) {
  //     return false;
  //   } else {
  //     for (let i = 0; i < arrayOne.length; i++) {
  //       if (arrayOne[i] !== arrayTwo[i]) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  // };

  // const testSortingAlgorithm = () => {
  //   for (let i = 0; i < 100; i++) {
  //     const testingArray = [];
  //     const length = randomIntFromInterval(1, 1000);

  //     for (let i = 0; i < length; i++) {
  //       testingArray.push(randomIntFromInterval(-1000, 1000));
  //     }

  //     const builtInSortedArray = array.slice().sort((a, b) => a - b);
  //     const ownSortedArray = ownMergeSort(array);
  //     console.log(checkArraysAreEqual(builtInSortedArray, ownSortedArray));
  //   }
  // };

  // const bubbleSort = () => {
  //   const animations = ownBubbleSort(array);

  //   for (let i = 0; i < animations.length; i++) {
  //     const bars = document.getElementsByClassName("bar");
  //     const isColorChange = i % 4 !== 2 || i % 4 !== 3;

  //     if (isColorChange) {
  //       const [barOneIdx, barTwoIdx] = animations[i];
  //       const barOneStyle = bars[barOneIdx].style;
  //       const barTwoStyle = bars[barTwoIdx].style;
  //       const color = i % 4 === 0 ? COMPARED_COLOR : ORIGINAL_COLOR;
  //       setTimeout(() => {
  //         barOneStyle.backgroundColor = color;
  //         barTwoStyle.backgroundColor = color;
  //       }, i * ANIMATION_SPEED_MS);
  //     } else {
  //       setTimeout(() => {
  //         const [barOneIdx, newHeight] = animations[i];
  //         const barOneStyle = bars[barOneIdx].style;
  //         barOneStyle.height = `${newHeight}px`;
  //       }, i * ANIMATION_SPEED_MS);
  //     }
  //   }
  // };

  // const selectionSort = () => {};
  // const insertionSort = () => {};

  // const mergeSort = () => {
  //   const builtInSortedArray = array.slice().sort((a, b) => a - b);
  //   const ownSortedArray = ownMergeSort(array);
  //   console.log(checkArraysAreEqual(builtInSortedArray, ownSortedArray));
  // };

  // const quickSort = () => {};
  // const randomQuickSort = () => {};
  // const countingSort = () => {};
  // const radixSort = () => {};
  // const heapSort = () => {};

  return (
    <div id="array-container" className="array-container">
      {array.map((number, id) => (
        <div
          key={id}
          className="bar"
          style={{
            height: `${number}px`,
            backgroundColor: BAR_COLOR,
          }}
        ></div>
      ))}
      <br />
      <button
        id="generate-button"
        style={{ display: "inline-block" }}
        onClick={() => generateNewRandomNumbers()}
      >
        Generate New Random Array
      </button>
      <button
        id="bubble-sort-button"
        onClick={() => bubbleSort(ANIMATION_SPEED_MS)}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => selectionSort(ANIMATION_SPEED_MS, BAR_COLOR, BAR_NUMBER)}
      >
        Selection Sort
      </button>
      {/* <button onClick={() => mergeSort(ANIMATION_SPEED_MS, BAR_COLOR)}>
        Merge Sort
      </button> */}
      <button
        onClick={() => insertionSort(ANIMATION_SPEED_MS, BAR_COLOR, BAR_NUMBER)}
      >
        Insertion Sort
      </button>
      <button
        onClick={() => heapSort(ANIMATION_SPEED_MS, BAR_COLOR, BAR_NUMBER)}
      >
        Heap Sort
      </button>
      {/*<button onClick={() => quickSort(ANIMATION_SPEED_MS, BAR_COLOR)}>
        Quick Sort
      </button>
      <button onClick={() => randomQuickSort()}>Random Quick Sort</button>
      <button onClick={() => countingSort()}>Counting Sort</button>
      <button onClick={() => radixSort()}>Radix Sort</button>
      <button onClick={() => testSortingAlgorithm()}>
        Testing Sorting Algorithm
      </button> */}
    </div>
  );
};

export default SortingVisualizer;
