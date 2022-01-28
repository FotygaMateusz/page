import React, { useState } from "react";
import Todoapp from "../projects/todoapp/Todoapp.js";
import Redux from "../projects/redux/Redux.js";
import Calc from "../projects/calc/Calc.js";
import Music from "../projects/music/Music.js";

import "../styles/Projects.css";

const Projects = () => {
  const [btnstate, setBtnstate] = useState(false);
  const [btnReduxState, setBtnReduxState] = useState(false);
  const [btnCalcState, setBtnCalcState] = useState(false);
  const [btnMusicState, setBtnMusicState] = useState(false);

  return (
    <div>
      <hr />
      <Todoapp trigger={btnstate} setTrigger={setBtnstate} />
      <Redux trigger={btnReduxState} setTrigger={setBtnReduxState} />
      <Calc trigger={btnCalcState} setTrigger={setBtnCalcState} />
      <Music trigger={btnMusicState} setTrigger={setBtnMusicState} />

      <div onClick={() => setBtnCalcState(true)} className="project">
        Kalkulator
      </div>
      <div onClick={() => setBtnMusicState(true)} className="project">
        Music Player app
      </div>
      <div onClick={() => setBtnstate(true)} className="project">
        To Do App
      </div>
      <div onClick={() => setBtnReduxState(true)} className="project">
        System oceniania(Redux)
      </div>
    </div>
  );
};

export default Projects;
