import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate =useNavigate();

  const makePayment = () => {
    setIsLoading(true);
    axios
      .post(
        `http://localhost:3000/users/courses/${id}`,
        {},
        {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setPurchasedCourses([
          ...purchasedCourses,
          res.data.purchasedCourse,
        ]);
        setIsPurchased(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }
  
  useEffect(() =>{
      axios.get(
        `http://localhost:3000/users/courses/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
         .then((res) => {
          setCourses(res.data.courses);
         })
         .catch((err) => console.log(err))

         axios.get("http://localhost:3000/users/purchasedCourses", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              setPurchasedCourses(res.data.purchasedCourses);
              setIsLoading(false)
            })
            .catch((err) => console.log(err));
            setIsLoading(false)
            }, [id]);

useEffect(() =>{
  const ans = purchasedCourses.some((item) => item._id === id);
  setIsPurchased(ans)
}, [id, purchasedCourses]);

if (isLoading) {
  return(
    <div 
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px"
        }}
        >
          <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
    </div>
  )
}
return(
    <div className="course">
      <div className="text-container">
        <div>
          <img src={courses.imageLink}
          alt={courses.imageLink}
          width={"200px"}
          style={{ borderRadius : "20px"}} 
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
          {!isPurchased ? (
            <Button
            style={{
              backgroundColor: isPurchased ? "green" : "red",
              padding: "10px",
              borderRadius:"5%",
              fontWeight: "500",
              fontSize: "50px"
            }}
            onClick={makePayment}
            >
              BUY NOW @${courses.price}
            </Button>
          ) : (
            <div><Button
            style={{
            backgroundColor: isPurchased ? "green" : "red",
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
            View Content
            </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Courses;


 