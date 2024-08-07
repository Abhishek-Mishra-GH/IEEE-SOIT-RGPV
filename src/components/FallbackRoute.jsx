import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const FallbackRoute = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/");
    } ,[]);


    return (
      <div className="h-screen">
        Hello
      </div>
    );
  }

  export default FallbackRoute;
