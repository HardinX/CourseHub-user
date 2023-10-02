import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {userLoggedInState } from "../store/selectors/userLoggedIn";

function LandingPage (){
   const navigate = useNavigate()
   const [isLoggedIn] = useRecoilState(userLoggedInState)
   console.log(isLoggedIn)

    return <div >
      <Grid container style= {{padding: "5vw"}}>
        <Grid item xs ={12} md = {6} lg ={6}>
          <div style={{marginTop: 100}}>
            <Typography variant= {"h2"} style={{ color: "white" }}>
              CourseHub User
            </Typography>
            <Typography variant="h5" style={{ color: "white" }}>
                A place where you own Learn your Skills
            </Typography>
            {!isLoggedIn && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                        <h1 className="landing-page">
                          A place to where you Learn skills
                        </h1>
                        <Button
                        className="btn-style"
                        onClick={() => navigate(isLoggedIn? "/courses": "/login")}>
                          {isLoggedIn ? "View Courses" : "Login Here"}
                        </Button>
                        </div>
                    </div>}
          </div>
        </Grid>
        <Grid item xs={12} md ={6} lg ={6} style={{marginTop: 20}}>
          <img src ={"https://images.yourstory.com/cs/wordpress/2013/08/coursehub.jpg"} width={"100%"} />
        </Grid>
      </Grid>
    </div>



}

export default LandingPage;