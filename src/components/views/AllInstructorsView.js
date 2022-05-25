import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Item.css"

const AllInstructorsView = (props) => {
  let {allInstructors, deleteInstructor} = props;
  if (!allInstructors.length) {
    return (
      <div>
          <p>There are no instructors.</p>
        <Link to={`/newinstructor`}>
          <Button text = "Add New Instructor" color="green"/>
        </Link>
      </div>
      );
    
  }

  return (
    <div className= "itemcontainer">
      <h1>All Instructors</h1>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
            <div className = "itembox">
              <Button onClick = {() => deleteInstructor(instructor.id)} text = "X" color="red"/>
              <Link className = "item" to={`/instructor/${instructor.id}`}>
                <h1>{name}</h1>
              </Link>
        <div className = "profilepic">
          <img className="profilepic" src = {instructor.imageUrl} alt="Instructor" width="100" height = "100"/>
        </div>
            </div>
          <div className = "itemdescriptionbox">
          <p> department: {instructor.department} <br/>
              Employee ID: {instructor.id}</p>
          </div>
        </div>
        );

      })}
      <Link to={`/newinstructor`}>
        <Button text = "Add New Instructor" color="green"/>
      </Link>

    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;