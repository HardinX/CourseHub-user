import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import { userState } from '../../src/store/atoms/user';
function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = userState("")
    const navigate = useNavigate()
    const setUser = useSetRecoilState(userState);

    const handleLogin = async () => {
      try {
          const res = await axios.post(
              "http://localhost:3000/users/login",
              {
                  username: email,
                  password: password
              },
              {
                  headers: {
                      "Content-type": "application/json"
                  }
              }
          );

          const data = res.data;

          if (data.success) {
              localStorage.setItem("token", data.token);
              setUser({
                  userEmail: email,
                  isLoading: true
              });
              navigate("/courses");
          } else {
              setError(data.message || "Login failed."); // Set error message
          }
      } catch (error) {
          setError("An error occurred while logging in."); // Handle network errors
      }
  };
    if({error}){
      return <div style={{color: "red"}}>{error}</div>
    }
    else {
    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Coursera. Login Below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={handleLogin}
                > Login</Button>
                <br></br>
                <div>
                  <h3 style={{fontWeight: "300"}}>
                    New here? Click here to register new account
                  </h3>
                  <Button
                  variant='contained'
                  style={{backgroundColor: "#64CCC5"}}
                  onClick={() =>{
                    navigate("/register")
                  }}>
                    Register 
                  </Button>
                </div>
            </Card>
        </div>
    </div>
    }
  }

export default LoginPage;