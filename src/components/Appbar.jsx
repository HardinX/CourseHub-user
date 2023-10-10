import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { userLoggedInState } from "../store/selectors/userLoggedIn";
import { userState } from "../store/atoms/user";

export default function Appbar(){
  const userEmail =useRecoilValue(userLoggedInState)
  const setUser = useRecoilState(userState)
  const navigate = useNavigate();

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>CourseHub</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                sx={{
                  bgcolor: "#053B50",
                  ":hover": {
                    bgcolor: "#115469",
                  },
                }}
                onClick={() => {
                  navigate("/courses");
                }}
              >
                All courses
              </Button>
            </div>
            <div style={{ marginRight: 10 }}>
              <Button
                sx={{ bgcolor: "#053B50" }}
                onClick={() => {
                  navigate("/courses/purchased");
                }}
              >
                Purchased Courses
              </Button>
            </div>
            <div style={{ marginRight: 10 }}>
              <Button
                variant={"contained"}
                sx={{ bgcolor: "#053B50" }}
                onClick={() => {
                  localStorage.setItem("token", null);
                   window.location ="/"
                  setUser({
                    isLoading: false,
                    userEmail: null
                  });
                }}
              > Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      zIndex: 1,
      overflow: "auto"

  }}>
      <div>
        <Typography>CourseHub</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>
          <Button
            variant={"contained"}
            sx={{
              bgcolor: "#053B50",
              ":hover": {
                bgcolor: "#115469",
              },
            }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </div>
        <div>
          <Button
            variant={"contained"}
            sx={{
              bgcolor: "#053B50",
              ":hover": {
                bgcolor: "#115469",
              },
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
