import { Link } from "react-router-dom";
import Button from "../Button";
import "./Item.css"
import { useState} from "react"
import NewInstructorView from "./NewInstructorView";



const InstructorView = ({instructor, editCourse, allCourses, deleteInstructor, handleSubmit, handleChange, showEditForm}) => {
  
  //img https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png
  //const {instructor, editCourse, allCourses, deleteInstructor, handleSubmit, handleChange, showEditForm} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  
  //const [currInstructor, setCurrInstructor] = useState(instructor)
  const[canEdit, setCanEdit] = useState(showEditForm)
  
  return (
    <div> 
      <div className = "instructorbox">
      <div>
          <img className="profilepic" src = {instructor.imageUrl} alt="Instructor" width="150" height = "150"/>
        </div>
        <div style={{paddingLeft: 50}}>    
          <h1>{instructor.firstname}</h1>
          <h3>{instructor.department}</h3>
          <h4> id: {instructor.id}</h4>
        </div>
      </div>

      <div style={{ display:"flex", alignContent: "flex-start", paddingLeft: 400, marginBottom: 20}}>
      <Button onClick = {() => deleteInstructor(instructor.id)} text = "Delete This Instructor" color="red"/>
      <Button onClick = {() => setCanEdit(!canEdit)} text = "Edit This Instructor" color="blue"/>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned courses:
        {assignedCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: null})}>x</button>
            </div>
          );
        })}</div>
        <div>Available courses:
        {availableCourses.map( course => {
          return (
            <div key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h4>{course.title}</h4>
            </Link>
            <button onClick={() => editCourse({id:course.id, instructorId: instructor.id})}>+</button>
            </div>
          );
        })}</div>

      </div>
        
        {canEdit && <NewInstructorView
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        formType = "Edit"/>}
  
    </div>
  );

};

export default InstructorView;