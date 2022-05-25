import { Link } from "react-router-dom";
import Button from "../Button";



const InstructorView = (props) => {
  
  const {instructor, editCourse, allCourses, deleteInstructor} = props;
  let assignedCourses = allCourses.filter(course => course.instructorId===instructor.id);
  let availableCourses = allCourses.filter(course => course.instructorId!==instructor.id);
  
  return (
    <div>      
      <h1>{instructor.firstname}</h1>
      <h3>{instructor.department}</h3>
      <h4> id: {instructor.id}</h4>
      <div style={{ display:"flex", alignContent: "flex-start", paddingLeft: 400, marginBottom: 20}}>
      <Button onClick = {() => deleteInstructor(instructor.id)} text = "Delete This Instructor" color="red"/>
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

  
    </div>
  );

};

export default InstructorView;