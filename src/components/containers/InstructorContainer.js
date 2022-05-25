import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { 
  fetchInstructorThunk,
  fetchAllCoursesThunk,
  editCourseThunk, 
  deleteInstructorThunk,
  editInstructorThunk
} from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      department: "", 
      imageUrl: "",
      showEditForm: false,
      redirect: false,
    };
  }
  
  componentDidMount() {
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
    this.props.fetchCourses();
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();

      if (!this.state.firstname){
        alert("Can't leave the First Name empty")
        return
      }
      if (!this.state.lastname){
        alert("Can't leave the Last Name empty")
        return
      }
      if (!this.state.department){
        this.setState({
          department: "tbd"
        })
      }


      if(!this.state.imageUrl){
        this.setState({
            imageUrl: "https://pbs.twimg.com/profile_images/763059478061281280/dSuGPwTZ_400x400.jpg"
        })
      }

      let new_instructor = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          department: this.state.department,
          imageUrl: this.state.imageUrl,
          id: this.props.match.params.id
      };
      console.log(new_instructor)
      let newInstructor = await this.props.editInstructor(new_instructor);

      this.setState({
          instructor: newInstructor
      });
  }

  onDelete = async id =>{
    await this.props.deleteInstructor(id)
    console.log("this happens")
    this.setState({
      redirect:true
    })
  }

  componentWillUnmount() {
    this.setState({redirect: false});
}

  

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/instructors`}/>)
    }
    return (
      <InstructorView 
        instructor={this.props.instructor}
        editCourse={this.props.editCourse}
        allCourses={this.props.allCourses}
        deleteInstructor = {this.onDelete}
        editInstructor = {this.editInstructor}
        handleSubmit = {this.handleSubmit}
        handleChange = {this.handleChange}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
    allCourses: state.allCourses,

  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course)),
    fetchCourses: () => dispatch(fetchAllCoursesThunk()),
    deleteInstructor: (id) => dispatch(deleteInstructorThunk(id)),
    editInstructor: (id) => dispatch(editInstructorThunk(id))
    

  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);