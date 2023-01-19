import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ScheduleIndex from "./pages/ScheduleIndex";
import MyScheduleIndex from "./pages/MyScheduleIndex";

const App = (props) => {
  const [schedules, setSchedules] = useState();
  useEffect(() => {
    readSchedule();
  }, []);

  const readSchedule = () => {
    fetch("/schedules")
      .then((response) => response.json())
      .then((payload) => {
        setSchedules(payload);
      })
      .catch((error) => console.log(error));
  };
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          exact
          path="/schedulesindex"
          element={<ScheduleIndex {...props} schedules={schedules} />}
        />
        <Route
          exact
          path="/myschedulesindex"
          element={<MyScheduleIndex {...props} schedules={schedules} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
