import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React  from 'react';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage"
import ShowCourses from "./components/ShowCourses";
import CoursePage from "./components/CoursePage";
import Purchased from "./components/Purchased";
import LandingPage from "./components/LandingPage";
import { AppBar } from "@mui/material";
import { RecoilRoot  } from "recoil";
import Courses from './components/CoursePage';


function App(){
  return (
    <RecoilRoot>
      <div 
        style={{ height: "100vh", width: "100vw", backgroundColor: "#64CCC5" }}
      >
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element= {< LandingPage/>}/>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path ="/courses" element = {<ShowCourses />} />
        <Route path ="/courses/:id" element ={<Courses />} />
        <Route path ="/courses/purchased" element ={<Purchased />} />
      </Routes>
     </Router>
    </div>
    </RecoilRoot>
  )

}
export default App; 