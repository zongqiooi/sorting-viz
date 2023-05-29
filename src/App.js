import React from "react";
import { Toaster } from "react-hot-toast";
import Switcher from "./utils/Switcher";
import SortingVisualizer from "./components/SortingVisualizer";
import Footer from "./components/Footer";
import "./css/SortingVisualizer.css";

function App() {
  return (
    <div class="bg-white dark:bg-gray-800 w-screen h-screen overflow-hidden">
      <Switcher />
      <Toaster />
      <SortingVisualizer />
      <Footer />
    </div>
  );
}

export default App;
