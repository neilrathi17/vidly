import React from "react";
import { link, useParams,useNavigate } from "react-router-dom";


const MovieForm = () => {
  const { id } = useParams();
  let navigate=useNavigate()

  
function handlesave()
{
    navigate('/movies')
}
  return (
    <div>
      <h1>MovieForm {id}</h1>
      <button className="btn btn-primary" onClick={handlesave}>Save</button>
    </div>
  );
};

export default MovieForm;
