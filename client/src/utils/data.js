// import {
//   FitnessCenterRounded,
//   LocalFireDepartmentRounded,
//   TimelineRounded,
// } from "@mui/icons-material";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TimelineIcon from "@mui/icons-material/Timeline";

import { FaFire } from "react-icons/fa";

export const counts = [
  {
    id: 1,
    name: "Calories Burned",
    // icon: (
    //   <LocalFireDepartmentIcon sx={{ color: "inherit", fontSize: "26px" }} />
    // ),
    //icon: <FaFire />,
    desc: "Total calories burned today",
    key: "totalCaloriesBurnt",
    unit: "kcal",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    id: 2,
    name: "Exercises",
    //icon: <FitnessCenterIcon sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Total no of Exercises for today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    id: 3,
    name: "Average  Calories Burned",
    //icon: <TimelineIcon sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Average Calories Burned on each Exercise",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];
