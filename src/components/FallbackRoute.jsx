import { useNavigate } from 'react-router-dom'
 

const FallbackRoute = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const path = window.location.pathname;
      if(path === "/dashboard") navigate("/dashboard");
      else if(path === "events") navigate("/events");
      else if(path === "gallery") navigate("gallery"); 
      else if(path === "executivecommittee") navigate("executivecommittee"); 
      else if(path === "operatingcommittee") navigate("operatingcommittee"); 
      else if(path === "blog") navigate("blog"); 
      else if(path === "contactus") navigate("contactus"); 
      else navigate(path);
    } ,[])
    return (
      <div className="h-screen"></div>
    );
  }

  export default FallbackRoute;
