import { useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Authentication from "./pages/Authentication";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Tutorials from "./pages/Tutorials";
import ProfilePage from "./pages/ProfilePage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  // const [user, setUser] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <NavBar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/tutorials" exact element={<Tutorials />} />
              <Route path="/blogs" exact element={<Blogs />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/profile" exact element={<ProfilePage />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
