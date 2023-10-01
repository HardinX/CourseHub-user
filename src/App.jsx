import { Route, Router, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ShowCourses from "./components/ShowCourses";
import CoursePage from "./components/CoursePage";
import Purchased from "./components/Purchased";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path = "/register" element={<SignupPage />}/>
        <Route path ="/courses" element = {<ShowCourses />} />
        <Route path ="/courses/:id" element ={<CoursePage />} />
        <Route path ="/courses/purcchased" element ={<Purchased />} />
      </Routes>
    </Router>
  )
}
export default App; 