import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const FallbackRoute = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const path = window.location.pathname;
        if(path === "/dashboard") navigate("/dashboard");
        if(path === "events") navigate("/events");
        if(path === "gallery") navigate("gallery"); 
        if(path === "executivecommittee") navigate("executivecommittee"); 
        if(path === "operatingcommittee") navigate("operatingcommittee"); 
        if(path === "blog") navigate("blog"); 
        if(path === "contactus") navigate("contactus");
        navigate("/");
    } ,[]);


    return (
      <div className="h-screen">
        Hello
      </div>
    );
  }

  export default FallbackRoute;
