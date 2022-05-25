import { Link } from "react-router-dom";
import Button from "../Button";
import "./Item.css"

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <Button color="blue" text="Add New Course"></Button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className= "itemcontainer">
      <h1>All Courses</h1>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
            <div className = "itembox">
            <Button onClick = {() => deleteCourse(course.id)} text = "X" color="red"/>
          <Link class = "item" to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          </div>
          <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newcourse`}>
        <Button color="blue" text="Add New Course"></Button>
      </Link>
    </div>
  );
};


export default AllCoursesView;