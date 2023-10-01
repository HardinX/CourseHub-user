import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [purchasedCourse, setPurchasedCourse] = useState(false);
  const { id } = useParams();
  const navigate =useNavigate();

  const makePayment = () => {
    navigate(`/courses/${id}/payment`);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
        `http://localhost:3000/users/courses/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        const data = response.data;
        console.log(data);
        setCourses(data.courses);
        console.log(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };  
     axios.get("http://localhost:3000/users/purchasedCourses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
     })
     .then((res) => {
      setPurchasedCourses(res.data.purchasedCourses);

      const isPurchased = purchasedCourses.some((item) => item.id === id);
      setPurchasedCourse(isPurchased)
    })
    .catch((err) => console.log(err));
    fetchData();
  }, [id]);


return(
  <div className="course">
    <div className="text-container">
      <div>
        <img src={courses.imageLink}
         alt={courses.imageLink}
         width={"200px"}
         style={( borderRadius = "20px")} 
         />
      </div>
      <div>
        <h1 className="course-title">{courses.title}</h1>
      </div>
      <br></br>
      <div>
        <h3 className="description">{courses.description}</h3>
      </div>

      <div>
        {!purchasedCourse ? (
          <Button
          style={{
            backgroundColor: purchasedCourse ? "green" : "red",
            padding: "10px",
            borderRadius:"5%",
            fontWeight: "500",
            fontSize: "50px"
          }}
          onClick={makePayment}
          >
            Buy @${courses.price}
          </Button>
        ) : (
          <div><Button
          style={{
          backgroundColor: purchasedCourse ? "green" : "red",
          padding :"10px ",
          borderRadius:"5%",
          fontSize: "50px",
          fontWeight: 'bold'
          }}
          >
            Purchased
          </Button>
          <Button
          style={{
            backgroundColor:'#f48fb1',
            padding :"7px ",
            borderRadius:"6%",
            fontSize: "50px",
            margin: "10px"
          }}
          >
           Purchased
          </Button>
          </div>
        )}
      </div>
    </div>
  </div>
)
}
export default Courses;
