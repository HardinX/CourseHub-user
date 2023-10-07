import { Route, Router, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ShowCourses from "./components/ShowCourses";
import CoursePage from "./components/CoursePage";
import Purchased from "./components/Purchased";
import LandingPage from "./components/LandingPage";
import { AppBar } from "@mui/material";
import { Toaster } from 'react-hot-toast';

function App(){
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element= {< LandingPage/>}/>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path = "/register" element={<SignupPage />}/>
        <Route path ="/courses" element = {<ShowCourses />} />
        <Route path ="/courses/:id" element ={<CoursePage />} />
        <Route path ="/courses/purchased" element ={<Purchased />} />
      </Routes>
      <Toaster />
    </Router>
  )
}
export default App; 