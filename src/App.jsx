import { Route, Router, Routes} from "react-router-dom";
import React, { useEffect } from 'react';
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ShowCourses from "./components/ShowCourses";
import CoursePage from "./components/CoursePage";
import Purchased from "./components/Purchased";
import LandingPage from "./components/LandingPage";
import { AppBar } from "@mui/material";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import axios from "axios";

function App(){
  return (
    <RecoilRoot>
      <div 
        style={{ height: "100vh", width: "100vw", backgroundColor: "#64CCC5" }}
      >
    <Router>
      <AppBar />
      <InitUser />
      <Routes>
        <Route path="/" element= {< LandingPage/>}/>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path = "/register" element={<SignupPage />}/>
        <Route path ="/courses" element = {<ShowCourses />} />
        <Route path ="/courses/:id" element ={<CoursePage />} />
        <Route path ="/courses/purchased" element ={<Purchased />} />
      </Routes>
     </Router>
    </div>
    </RecoilRoot>
  )

  function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
  
        if (response.data.username) {
          setUser({
            isLoading: false,
            userEmail: response.data.username,
          });
        } else {
          setUser({
            isLoading: false,
            userEmail: null,
          });
        }
      } catch (e) {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    };
  
    useEffect(() => {
      init();
    }, [setUser]);
  
    return <></>;
  }
}
export default App; 