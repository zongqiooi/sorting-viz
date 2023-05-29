import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../css/SortingVisualizer.css";
import bubbleSort from "../utils/SortingAlgorithms/bubbleSort";
import selectionSort from "../utils/SortingAlgorithms/selectionSort";
import insertionSort from "../utils/SortingAlgorithms/insertionSort";
import mergeSort from "../utils/SortingAlgorithms/mergeSort";
import quickSort from "../utils/SortingAlgorithms/quickSort";

const ANIMATION_SPEED_MS = 1;
const BAR_NUMBER = 100; // 330
const BAR_MIN_HEIGHT = 5;
const BAR_MAX_HEIGHT = 450;
const ORIGINAL_COLOR = "#00E7FF";
const COMPARED_COLOR = "#FF1E1E";
const SWAPPED_COLOR = "#00FFD1";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateNewRandomNumbers = () => {
    const numbers = [];

    for (let i = 0; i < BAR_NUMBER; i++) {
      numbers.push(randomIntFromInterval(BAR_MIN_HEIGHT, BAR_MAX_HEIGHT));
    }

    setArray(numbers);

    try {
      const bars = document.querySelectorAll(".bar");
      bars.forEach((bar) => {
        bar.style.backgroundColor = ORIGINAL_COLOR;
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

  return (
    <div>
      <div id="array-container" className="array-container">
        <div id="bars-container">
          {array.map((number, id) => (
            <div
              key={id}
              className="bar"
              style={{
                height: `${number}px`,
                backgroundColor: ORIGINAL_COLOR,
              }}
            ></div>
          ))}
        </div>
        <br />
        <div id="buttons-container">
          <button
            id="generate-button"
            style={{
              display: "inline-block",
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            className="button"
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() => generateNewRandomNumbers()}
          >
            New! 🚀
          </button>

          <button
            id="merge-sort-button"
            className="button"
            style={{
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() =>
              mergeSort(
                ANIMATION_SPEED_MS,
                ORIGINAL_COLOR,
                COMPARED_COLOR,
                SWAPPED_COLOR
              )
            }
          >
            Merge Sort
          </button>
          <button
            id="quick-sort-button"
            className="button"
            style={{
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() =>
              quickSort(
                ANIMATION_SPEED_MS,
                ORIGINAL_COLOR,
                COMPARED_COLOR,
                SWAPPED_COLOR
              )
            }
          >
            Quick Sort
          </button>
          <button
            id="bubble-sort-button"
            className="button"
            style={{
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() =>
              bubbleSort(
                ANIMATION_SPEED_MS,
                ORIGINAL_COLOR,
                COMPARED_COLOR,
                SWAPPED_COLOR
              )
            }
          >
            Bubble Sort
          </button>
          <button
            id="selection-sort-button"
            className="button"
            style={{
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() =>
              selectionSort(
                ANIMATION_SPEED_MS,
                BAR_NUMBER,
                ORIGINAL_COLOR,
                COMPARED_COLOR,
                SWAPPED_COLOR
              )
            }
          >
            Selection Sort
          </button>
          <button
            id="insertion-sort-button"
            className="button"
            style={{
              cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
            }}
            class="hover:bg-gray-100 text-gray-800 font-semibold max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors  ml-3 mr-3 mt-4 dark:shadow-lg dark:shadow-cyan-100/50"
            onClick={() =>
              insertionSort(
                ANIMATION_SPEED_MS,
                BAR_NUMBER,
                ORIGINAL_COLOR,
                COMPARED_COLOR,
                SWAPPED_COLOR
              )
            }
          >
            Insertion Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
