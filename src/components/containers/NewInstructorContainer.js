import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "", 
          imageUrl: "",
          redirect: false, 
          redirectId: null,
          newForm: true 
        };
    }

    handleChange = event => {
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
          console.log(this.state.imageUrl)

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
        };
        
        let newInstructor = await this.props.addInstructor(instructor);

        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            redirect: true, 
            redirectId: newInstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }



    render() {
      //go to single course view of newly created course
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <NewInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit} 
            formType = "New"   
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);