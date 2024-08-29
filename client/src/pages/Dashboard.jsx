import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatsCard from "../components/cards/WeeklyStatsCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import ExerciseCard from "../components/cards/ExerciseCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
// const CountsCard = styled.div``;

const Dashboard = () => {
  // const data = {
  //   totalCaloriesBurnt: 13500,
  //   totalWorkouts: 6,
  //   avgCaloriesBurntPerWorkout: 2250,
  //   totalWeeksCaloriesBurnt: {
  //     weeks: ["17th", "18th", "19th", "20th", "21st", "22nd", "23rd"],
  //     caloriesBurned: [1050, 800, 340, 870, 1360, 940, 1350],
  //   },
  //   pieChartData: [
  //     {
  //       id: 0,
  //       value: 6000,
  //       label: "Legs",
  //     },
  //     {
  //       id: 1,
  //       value: 1500,
  //       label: "Back",
  //     },
  //     {
  //       id: 2,
  //       value: 3750,
  //       label: "Shoulders",
  //     },
  //     {
  //       id: 3,
  //       value: 2250,
  //       label: "Abdominals",
  //     },
  //   ],
  // };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Chest
-Dumbell Press
-5 setsX15 reps
-40 kg
-10 min`);

  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      //console.log(res.data);
      setLoading(false);
    });
  };
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      //console.log(res.data);
      setLoading(false);
    });
  };

  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await addWorkout(token, { workoutString: workout })
      .then((res) => {
        dashboardData();
        getTodaysWorkout();
        setButtonLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard item={item} data={data} />
          ))}
          {/* <div>Card</div>
          <div>Card</div>
          <div>Card</div> */}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatsCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>

        <Section>
          <Title>Today's Exercises</Title>
          <CardWrapper>
            {/* <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard /> */}
            {todaysWorkouts.map((workout) => (
              <ExerciseCard workout={workout} />
            ))}
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
