import React, { useState, useEffect } from "react";
import "../css/SortingVisualizer.css";
import ownMergeSort from "../SortingAlgorithms/ownMergeSort";
// import from "../SortingAlgorithms/ownMergeSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateNewRandomNumbers = () => {
    const numbers = [];

    for (let i = 0; i < 330; i++) {
      numbers.push(randomIntFromInterval(5, 550));
    }

    setArray(numbers);
    console.log("this is from generate new random numbers function");
    console.log(numbers);
    console.log(array);
  };

  useEffect(() => {
    generateNewRandomNumbers();
  }, [generateNewRandomNumbers]);

  const checkArraysAreEqual = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    } else {
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
      return true;
    }
  };

  const bubbleSort = () => {};
  const selectionSort = () => {};
  const insertionSort = () => {};
  const mergeSort = () => {
    const builtInSortedArray = array.sort();
    const ownSortedArray = ownMergeSort(array);
    console.log(array);
    console.log(builtInSortedArray);
    console.log(ownSortedArray);
    console.log(checkArraysAreEqual(builtInSortedArray, ownSortedArray));
  };
  const quickSort = () => {};
  const randomQuickSort = () => {};
  const countingSort = () => {};
  const radixSort = () => {};

  return (
    <div className="array-container">
      {array.map((number, id) => (
        <div
          key={id}
          className="array-bar"
          style={{ height: `${number}px` }}
        ></div>
      ))}
      <button onClick={() => generateNewRandomNumbers()}>
        Generate New Random Array
      </button>
      <button onClick={() => bubbleSort()}>Bubble Sort</button>
      <button onClick={() => selectionSort()}>Selection Sort</button>
      <button onClick={() => insertionSort()}>Insertion Sort</button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button onClick={() => quickSort()}>Quick Sort</button>
      <button onClick={() => randomQuickSort()}>Random Quick Sort</button>
      <button onClick={() => countingSort()}>Counting Sort</button>
      <button onClick={() => radixSort()}>Radixx Sort</button>
    </div>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
