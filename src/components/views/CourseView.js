import { Link } from "react-router-dom";
import Button from "../Button";
import "./Item.css"
import { useState} from "react"
import { NewCourseView } from ".";

const CourseView = ({ course, deleteCourse, handleChange, handleSubmit}) => {
  const[canEdit, setCanEdit] = useState(false)
  return (
    <div>
      <h1>{course.title}</h1>
      <h2>location: {course.location} </h2>
      <h2>Time: {course.timeslot} </h2>
      {course.instructor ? <Link to={`/instructor/${course.instructorId}`}> 
            <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3> </Link>: <h3>staff</h3>}
      
      <div style={{ display:"flex", alignContent: "flex-start", paddingLeft: 400, marginBottom: 20}}>
      <Button onClick = {() => deleteCourse(course.id)} text = "Delete This Course" color="red"/>
      <Button onClick = {() => setCanEdit(!canEdit)} text = "Edit This Course" color="blue"/>
      </div>

      {canEdit && <NewCourseView 
            handleChange = {handleChange} 
            handleSubmit={handleSubmit}  
            formType = "Edit"    
          />
      }

    </div>
  );

};

export default CourseView;