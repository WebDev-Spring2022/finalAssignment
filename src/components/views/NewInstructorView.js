


const NewInstructorView = (props) => {
    // console.log(props)
    const {handleChange, handleSubmit, formType } = props;
    // console.log(formType)
    return (
      <div className="root">
        <div className="formContainer">
          <div className="formTitle">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              {formType === "New" && <h1> New Instructor</h1>}
              {formType === "Edit" && <h1> Edit Instructor</h1>}
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>department: </label>
            <input type="text" name="department" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>imageUrl: </label>
            <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <button type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>
          </div>
        </div>
      
    )
  }
  
  export default NewInstructorView;