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