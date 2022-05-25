import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { 
        fetchCourseThunk,
        fetchAllInstructorsThunk,
        deleteCourseThunk,
        editCourseThunk
      } from "../../store/thunks";
import { CourseView } from "../views";

class CourseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "", 
      timeslot: "",
      location: "", 
      instructorId: null, 
      redirect: false, 
    };
}
  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();

      if (!this.state.title){
        alert("Can't leave the title empty")
        return
      }
      if (!this.state.timeslot){
        this.setState({
          timeslot: "tbd"
        })
      }
      if (!this.state.location){
        this.setState({
          location: "tbd"
        })
      }

      if(!this.state.instructorId){
        alert("Instructor ID can't be empty")
        return
      }

      let course = {
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: this.state.instructorId,
          id: this.props.match.params.id
      };
      
      let newCourse = await this.props.editCourse(course);

      this.setState({
        course: newCourse 
      });
  }


  onDelete = async id =>{
    await this.props.deleteCourse(id)
    this.setState({
      redirect:true
    })
  }

  componentWillUnmount() {
    this.setState({redirect: false});
}

  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/courses`}/>)
    }

    return (
      <CourseView 
        course={this.props.course}
        deleteCourse={this.onDelete}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
    fetchInstructors: () => dispatch(fetchAllInstructorsThunk()),
    deleteCourse: (id) => dispatch(deleteCourseThunk(id)),
    editCourse: (course) => dispatch(editCourseThunk(course))
  };
};

export default connect(mapState, mapDispatch)(CourseContainer);