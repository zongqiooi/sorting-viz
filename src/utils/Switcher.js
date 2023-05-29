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
          class="drop-shadow-lg shadow-black dark:text-white font-normal text-lg"
          style={{
            marginTop: "2%",
            marginLeft: "2%",
          }}
        >
          Sorting Viz
          <LeaderboardOutlinedIcon
            sx={{ fontSize: 25 }}
            style={{ marginLeft: "15px", marginBottom: "7px" }}
          />
        </p>

        <DarkModeSwitch
          style={{
            marginTop: "2%",
            marginRight: "2%",
            cursor: `url("https://static1.squarespace.com/static/61732094cf67366ff380a4dd/t/619e6dcace6b7b31807c3c61/1637772746935/InDesignCursor.png"), auto`,
          }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={25}
        />
      </div>
    </>
  );
}
