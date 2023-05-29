import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import "../css/SortingVisualizer.css";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          id="website-icon"
          class="drop-shadow-lg shadow-black dark:text-white font-normal text-lg"
        >
          Sorting Viz
          <LeaderboardOutlinedIcon
            sx={{ fontSize: 25 }}
            style={{ marginLeft: "15px", marginBottom: "7px" }}
          />
        </p>

        <DarkModeSwitch
          id="dark-mode-icon"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
    </>
  );
}
