

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Final Project</h1>
      <h2>Dewan Sunnah </h2>
      <Link to={'/instructors'} > All Instructors </Link>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
