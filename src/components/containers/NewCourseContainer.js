import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCourseView from '../views/NewCourseView';
import {addCourseThunk } from '../../store/thunks';


class NewCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          location: "", 
          instructorId: null, 
          redirect: false, 
          redirectId: null
        };
    }
    

    handleChange = event => {
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
            instructorId: this.state.instructorId
        };
        
        let newCourse = await this.props.addCourse(course);

        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: null, 
          redirect: true, 
          redirectId: newCourse.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/course/${this.state.redirectId}`}/>)
        }
        return (
          <NewCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}  
            formType = "New"    
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCourse: (course) => dispatch(addCourseThunk(course)),
    })
}

export default connect(null, mapDispatch)(NewCourseContainer);