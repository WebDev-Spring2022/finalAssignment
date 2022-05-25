import Button from "../Button";

const CourseView = (props) => {
  const { course, deleteCourse, editCourse } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      <h2>location: {course.location} </h2>
      <h2>Time: {course.timeslot} </h2>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
      <div style={{ display:"flex", alignContent: "flex-start", paddingLeft: 400, marginBottom: 20}}>
      <Button onClick = {() => deleteCourse(course.id)} text = "Delete This Course" color="red"/>
      </div>
    </div>
  );

};

export default CourseView;